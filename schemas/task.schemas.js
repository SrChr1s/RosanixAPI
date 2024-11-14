import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .max(30, "Title cannot exceed 30 characters"),
  descr: z
    .string({ required_error: "Description must be a string" })
    .optional(),
  expiresIn: z.string().datetime().optional(),
});
