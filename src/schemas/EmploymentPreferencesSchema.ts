import { z } from 'zod'

export const EmploymentPreferencesDataSchema = z
  .object({
    contract: z.string().min(1, 'porfavor informe um contrato válido'),
    wageMonth: z.string().min(1, 'porfavor informe um salário mensal válido'),
    wageHour: z.string().min(1, 'porfavor informe um salário anual válido'),
    availabilityStart: z
      .string()
      .min(1, 'porfavor informe uma disponibilidade de horário válida'),
    availabilityEnd: z
      .string()
      .min(1, 'porfavor informe uma disponibilidade de horário válida')
  })
  .transform((field) => ({
    contract: field.contract,
    wageMonth: field.wageMonth,
    wageHour: field.wageHour,
    availabilityStart: field.availabilityStart,
    availabilityEnd: field.availabilityEnd
  }))
