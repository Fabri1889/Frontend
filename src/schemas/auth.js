import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un email valido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Usuario es requerido",
      })
      .min(3, {
        message: "El usuario debe tener mas de 3 caracteres",
      }),
    email: z.string().email({
      message: "Por favor ingresa un email valido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe ser mayor a 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe ser mayor a 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "La contraseña no coincide",
    path: ["confirmPassword"],
  });
