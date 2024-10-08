import { z } from 'zod'

export const ProjectsAndExperienceDataSchema = z.object({
  github: z
    .string()
    .regex(
      /(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+/,
      'Insira uma URL válida do GitHub'
    ),
  linkedin: z
    .string()
    .regex(
      /(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+/,
      'Insira uma URL válida do LinkedIn'
    ),
  site: z.string().url('Insira uma URL válida para o portfólio ou site')
})
