import exprss, { Request, Response } from "express";
const app = exprss();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Welcome to Tour Management System Backend");
});

export default app;
