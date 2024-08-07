"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = Object.assign({}, this.queryString);
        const excludedFields = ["page", "sort", "order", "limit", "fields"];
        excludedFields.forEach((field) => delete queryObj[field]);
        // Advanced filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    sort() {
        if (this.queryString.sort) {
            const order = this.queryString.order === "desc" ? "-" : "";
            const sortBy = `${order}${this.queryString.sort}`;
            this.query = this.query.sort(sortBy);
        }
        else {
            this.query = this.query.sort("-createdAt");
        }
        // Apply collation for case-insensitive sorting
        this.query = this.query.collation({ locale: "en", strength: 2 });
        return this;
    }
    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(",").join(" ");
            this.query = this.query.select(fields);
        }
        else {
            this.query = this.query.select("-__v");
        }
        return this;
    }
    paginate() {
        const page = this.queryString.page
            ? parseInt(this.queryString.page, 10)
            : 1;
        const limit = this.queryString.limit
            ? parseInt(this.queryString.limit, 10)
            : 10;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
    getQuery() {
        return this.query;
    }
}
exports.default = APIFeatures;
