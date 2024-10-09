import { z } from 'zod'

export const PasswordInfoEditSchema = z
  .object({
    password: z.string().min(1, 'porfavor informe uma senha válida'),
    newPassword: z.string().min(1, 'porfavor informe uma nova senha válida'),
    confirmNewPassword: z.string().min(1, 'as senhas não coencidem')
  })
  .transform((field) => ({
    password: field.password,
    newPassword: field.newPassword,
    confirmNewPassword: field.confirmNewPassword
  }))
