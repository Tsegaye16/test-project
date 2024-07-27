type handler = (req: any, res: any, next: any) => Promise<any>;
module.exports = (fn: handler) => {
  return (req: any, res: any, next: any) => {
    fn(req, res, next).catch(next);
  };
};
