import { z } from 'zod'

export const ProfessionalInformationDataSchema = z
  .object({
    developer: z.string().min(1, 'porfavor informe um cargo válido'),
    specialty: z.string().min(1, 'porfavor informe uma especialidade válida'),
    seniority: z.string().min(1, 'porfavor informe uma senioridade válida'),
    skills: z.string().min(1, 'porfavor informe uma habilidade válido')
  })
  .transform((field) => ({
    developer: field.developer,
    specialty: field.specialty,
    seniority: field.seniority,
    skills: field.skills
  }))
