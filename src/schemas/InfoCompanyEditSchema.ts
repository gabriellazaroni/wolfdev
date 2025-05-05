import { z } from 'zod'

export const InfoCompanyEditSchema = z
  .object({
    companyName: z.string().min(1, 'porfavor informe um nome de empresa válido'),
    local: z.string().min(1, 'porfavor informe uma localidade válida'),
    workingModel: z.string().min(1, 'porfavor informe um modelo de trabalho válido'),
    employeesNumber: z.string().min(1, 'porfavor informe um número de funcionários válido'),
    site: z.string().min(1, 'porfavor informe um modelo de trabalho válido'),
    linkedin: z.string().min(1, 'porfavor informe um modelo de trabalho válido'),
    facebook: z.string().min(1, 'porfavor informe um modelo de trabalho válido'),
    instagram: z.string().min(1, 'porfavor informe um modelo de trabalho válido')

  })
  .transform((field) => ({
    companyName: field.companyName,
    local: field.local,
    workingModel: field.workingModel,
    employeesNumber: field.employeesNumber,
    site: field.employeesNumber,
    linkedin: field.employeesNumber,
    facebook: field.employeesNumber,
    instagram: field.employeesNumber
  }))
