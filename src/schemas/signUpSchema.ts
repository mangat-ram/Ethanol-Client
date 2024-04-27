import { z } from "zod";

export const usernameVal = z
  .string()
  .min(3,"username must be atleast three chracters.")
  .max(20,"username can have 20 chracters atmost.")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special chracters")

export const nameVal = z
  .string()
  .min(3,"username must be atleast three chracters.")
  .max(20,"username can have 20 chracters atmost.")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special chracters")

export const signUpSchema = z.object({
  userName: usernameVal,
  name: nameVal,
  email: z.string().email({message:"Invalid Email Address"}),
  passWord: z.string().min(6,{message : "Password must contain six letters."})
})