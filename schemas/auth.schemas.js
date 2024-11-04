import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email." })
    .max(100, "Email cannot exceed 100 characters."),
  passw: z
    .string({ required_error: "Password is required." })
    .min(8, "Password must be at least 8 characters."),
});

export const regisSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .min(3, "Name must be at least 3 characters.")
    .max(255, "Name cannot exceed 255 characters."),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email." })
    .max(255, "Email cannot exceed 255 characters."),
  passw: z
    .string({ required_error: "Password is required." })
    .min(8, "Password must be at least 8 characters."),
});
