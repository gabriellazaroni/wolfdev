import { z } from 'zod'

export const HireRegisterCompanyDataSchema = z
  .object({
    email: z.string().min(1, 'porfavor informe um tipo serviço válido'),
    cnpj: z.string().min(1, 'porfavor informe um tipo contrato válido'),
    name: z.string().min(1, 'porfavor informe um tipo contrato válido'),
    employeeNumber: z
      .string()
      .min(1, 'porfavor informe um tipo contrato válido')
  })
  .transform((field) => ({
    email: field.email,
    cnpj: field.cnpj,
    name: field.name,
    employeeNumber: field.employeeNumber
  }))
