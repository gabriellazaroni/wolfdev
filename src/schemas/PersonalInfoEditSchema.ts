import { z } from 'zod'

export const PersonalInfoEditSchema = z
  .object({
    name: z.string().min(1, 'porfavor informe um nome válido'),
    lastName: z.string().min(1, 'porfavor informe um sobrenome válido'),
    phoneNumber: z.string().min(1, 'porfavor informe um número de telefone válido'),
    email: z.string().min(1, 'porfavor informe um email válido'),
    country: z.string().min(1, 'porfavor informe um país válido'),
    birth: z.string().min(1, 'porfavor informe uma data válida')
  })
  .transform((field) => ({
    name: field.name,
    lastName: field.lastName,
    phoneNumber: field.phoneNumber,
    email: field.email,
    country: field.country,
    birth: field.birth
  }))
