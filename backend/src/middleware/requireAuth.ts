import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../auth/tokens.js";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try {
    const payload = verifyAccessToken(token);
    (req as any).userId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: "unauthorized" });
  }
};
