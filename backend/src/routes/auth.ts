import { userStore } from "../auth/store.js";
import { Router } from "express";
import {
  loginInputType,
  loginSchema,
  registerInputType,
  registerSchema,
} from "../schema.js";
import { validate } from "../validate.js";
import { hashPassword, verifyPassword } from "../auth/password.js";

const { create, getByEmail } = userStore;
const DUMMY_HASH = await hashPassword("timing-equalizer-dummy");
const authRouter = Router();

authRouter.post("/register", validate(registerSchema), async (req, res) => {
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

authRouter.post("/login", validate(loginSchema), async (req, res) => {
  const { email, password }: loginInputType = req.body;

  const user = getByEmail(email);
  const hashToCheck = user?.passwordHash ?? DUMMY_HASH;
  const checkPassword = await verifyPassword(hashToCheck, password);
  if (!user || !checkPassword) {
    return res.status(401).json({ error: "invalid credentials" });
  }

  return res.status(200).json({
    ok: true,
    message: "User logged in successfully",
  });
});

export default authRouter;
