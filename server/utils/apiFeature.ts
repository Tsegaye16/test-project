import { Query } from "mongoose";

interface QueryString {
  [key: string]: any;
  page?: string;
  sort?: string;
  order?: string;
  limit?: string;
  fields?: string;
}

class APIFeatures<T extends Query<any, any>> {
  private query: T;
  private queryString: QueryString;

  constructor(query: T, queryString: QueryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter(): this {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "order", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr)) as T;

    return this;
  }

  sort(): this {
    if (this.queryString.sort) {
      const order = this.queryString.order === "desc" ? "-" : "";
      const sortBy = `${order}${this.queryString.sort}`;
      this.query = this.query.sort(sortBy) as T;
    } else {
      this.query = this.query.sort("-createdAt") as T;
    }

    // Apply collation for case-insensitive sorting
    this.query = this.query.collation({ locale: "en", strength: 2 }) as T;

    return this;
  }

  limitFields(): this {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields) as T;
    } else {
      this.query = this.query.select("-__v") as T;
    }

    return this;
  }

  paginate(): this {
    const page = this.queryString.page
      ? parseInt(this.queryString.page, 10)
      : 1;
    const limit = this.queryString.limit
      ? parseInt(this.queryString.limit, 10)
      : 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit) as T;

    return this;
  }

  getQuery(): T {
    return this.query;
  }
}

export default APIFeatures;
