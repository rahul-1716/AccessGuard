import { registerInputType, registerSchema } from "./schema.js";
import { validate } from "./validate.js";
import { Router } from "express";

export const router = Router();

const users: Record<string, string> = {
  alice: "admin",
  bob: "member",
};

router.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

router
  .route("/users")
  .get((req, res) => {
    res.status(200).json({ users: Object.keys(users) });
  })
  .post((req, res) => {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
  });

router.get("/users/:id", (req, res) => {
  const role = users[req.params.id];
  if (!role) {
    return res.status(404).json({ error: "user not found" });
  }
  res.status(200).json({ name: req.params.id, role });
});

router.route("/register").post(validate(registerSchema), (req, res) => {
  const { email, name }: registerInputType = req.body;
  return res.status(201).json({ ok: true, data: { email, name } });
});
