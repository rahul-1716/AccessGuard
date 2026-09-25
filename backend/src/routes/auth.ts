import { userStore } from "../auth/store.js";
import { Router } from "express";
import {
  loginInputType,
  loginSchema,
  refreshSchema,
  registerInputType,
  registerSchema,
} from "../schema.js";
import { validate } from "../validate.js";
import { hashPassword, verifyPassword } from "../auth/password.js";
import {
  createAccessToken,
  createRefreshToken,
  hashRefreshToken,
} from "../auth/tokens.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { sessionStore } from "../auth/sessions.js";

const { create, getByEmail, getByID } = userStore;
const DUMMY_HASH = await hashPassword("timing-equalizer-dummy");
const authRouter = Router();

authRouter.post("/auth/register", validate(registerSchema), async (req, res) => {
  const { email, name, password }: registerInputType = req.body;
  const checkEmail = getByEmail(email);
  if (checkEmail) {
    return res.status(409).json({ error: "Email already taken" });
  }
  const safePassword = await hashPassword(password);

  const save = create(name, email, safePassword);

  return res.status(201).json({
    ok: true,
    data: { id: save.id, email, name },
  });
});

authRouter.post("/auth/login", validate(loginSchema), async (req, res) => {
  const { email, password }: loginInputType = req.body;

  const user = getByEmail(email);
  const hashToCheck = user?.passwordHash ?? DUMMY_HASH;
  const checkPassword = await verifyPassword(hashToCheck, password);
  if (!user || !checkPassword) {
    return res.status(401).json({ error: "invalid credentials" });
  }

  const accessToken = createAccessToken(user.id);
  const refreshToken = createRefreshToken();
  const session = sessionStore.create(user.id, hashRefreshToken(refreshToken));
  return res.status(200).json({
    accessToken,
    refreshToken,
    user: { id: user.id, email, name: user.name },
  });
});

authRouter.get("/auth/me", requireAuth, (req, res) => {
  const userId = (req as any).userId;
  const user = getByID(userId);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.status(200).json({
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
});

authRouter.post("/auth/refresh", validate(refreshSchema), (req, res) => {
  const { refreshToken } = req.body;
  const refreshHash = hashRefreshToken(refreshToken);

  const session = sessionStore.findByRefreshHash(refreshHash);

  if (!session || session.revokedAt) {
    return res.status(401).json({
      error: "invalid session",
    });
  }

  const nextAccessToken = createAccessToken(session.userId);
  const nextRefreshToken = createRefreshToken();

  session.refreshTokenHash = hashRefreshToken(nextRefreshToken);
  session.lastUsedAt = Date.now();

  return res.status(200).json({
    accessToken: nextAccessToken,
    refreshToken: nextRefreshToken,
  });
});

authRouter.post("/auth/logout", validate(refreshSchema), (req, res) => {
  const { refreshToken } = req.body;
  const refreshHash = hashRefreshToken(refreshToken);
  const session = sessionStore.findByRefreshHash(refreshHash);
  if (!session || session.revokedAt) {
    return res.status(401).json({
      error: "invalid session",
    });
  }
  session.revokedAt = Date.now();
  return res.status(200).json({
    ok: true,
  });
});

export default authRouter;
