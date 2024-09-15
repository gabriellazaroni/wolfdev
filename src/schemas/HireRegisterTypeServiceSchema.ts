import { z } from 'zod'

export const HireRegisterTypeServiceDataSchema = z
  .object({
    service: z.string().min(1, 'porfavor informe um tipo serviço válido'),
    contract: z.string().min(1, 'porfavor informe um tipo contrato válido')
  })
  .transform((field) => ({
    service: field.service,
    contract: field.contract
  }))
