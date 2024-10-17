import { z } from 'zod'

export const AccountEditSchema = z
  .object({
    reasonForClosing: z.string().min(1, 'porfavor selecione uma opção válida')
  })
  .transform((field) => ({
    reasonForClosing: field.reasonForClosing
  }))
