import { z } from 'zod'

export const FilterFeedHirerSchema = z
  .object({
    service: z.string(),
    skills: z.string(),
    professional: z.string(),
    seniority: z.string(),
    locationState: z.string(),
    locationCity: z.string(),
    pricePerHour: z.string()
  })
  .transform((field) => ({
    service: field.service,
    skills: field.skills,
    professional: field.professional,
    seniority: field.seniority,
    locationState: field.locationState,
    locationCity: field.locationCity,
    pricePerHour: field.pricePerHour
  }))
