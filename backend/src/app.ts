import express, { NextFunction, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { router } from "./routes.js";
export const app = express();

const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(
      `${req.method} ${req.url} -> ${res.statusCode} (${Date.now() - start}ms)`,
    );
  });
  next();
};

app.use(logger);

const attachRequestId = (_req: Request, res: Response, next: NextFunction) => {
  const randomId = randomUUID();
  res.setHeader("X-Request-Id", randomId);
  next();
};

app.use(attachRequestId);

app.use(express.json());

app.use(router);

app.get("/boom", (_req, res) => {
  throw new Error("secret db password: hunter2");
});

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (res.headersSent) return;
  res.status(500).json({ error: "Internal Server Error" });
});
