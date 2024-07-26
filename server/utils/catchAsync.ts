import { NextFunction } from "express";

type handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;
const catchAsync = (fn: handler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
