import * as z from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(1, { message: "Email atau Username wajib diisi." }),
  password: z.string().min(6, { message: "Kata Sandi minimal 6 karakter." }),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(1, { message: "Nama Lengkap wajib diisi." }),
    nip: z.string().min(1, { message: "NIP wajib diisi." }).regex(/^\d+$/, { message: "NIP harus berupa angka." }),
    username: z.string().min(4, { message: "Username minimal 4 karakter." }),
    email: z.string().min(1, { message: "Email Kantor wajib diisi." }).email({ message: "Format email tidak valid." }),
    password: z.string().min(8, { message: "Kata Sandi minimal 8 karakter." }),
    confirmPassword: z.string().min(1, { message: "Konfirmasi Kata Sandi wajib diisi." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata Sandi dan Konfirmasi Kata Sandi tidak cocok.",
    path: ["confirmPassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
