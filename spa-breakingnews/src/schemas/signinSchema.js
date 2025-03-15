import z from "zod";

export const signinSchema = z.object({
    email: z.string().email({ message: "E-mail invalido" }).toLowerCase(),
    password: z.string().min(6, { message: "Senha deve conter no mínimo 6 caracteres" }),
})