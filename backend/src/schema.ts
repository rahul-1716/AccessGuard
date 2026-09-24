import { z } from "zod";

export const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(1).max(50),
});

export type registerInputType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1).max(50),
});

export type loginInputType = z.infer<typeof loginSchema>;

export const inviteSchema = z.object({
  email: z.email(),
  role: z.enum(["admin", "member", "viewer"]),
});

export type inviteInputType = z.infer<typeof inviteSchema>;
