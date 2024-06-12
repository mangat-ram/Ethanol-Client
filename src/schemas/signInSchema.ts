import { z } from "zod";

export const signInSchema = z.object({
  userName : z.string(),
  passWord: z.string()
})