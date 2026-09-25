import jwt from "jsonwebtoken";
import { createHash, randomBytes } from "node:crypto";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET is not configured");
}

export const createAccessToken = (userId: string) =>
  jwt.sign({ sub: userId }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, ACCESS_TOKEN_SECRET);

export const createRefreshToken = () => randomBytes(32).toString("hex");
export const hashRefreshToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");
