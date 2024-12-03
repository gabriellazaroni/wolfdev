import { z } from 'zod'

export const HireModalAboutProjectSchema = z
  .object({
    category: z.string().min(1, 'porfavor informe uma categpria válida'),
    subCategory: z.string().min(1, 'porfavor informe uma subcategoria válida'),
    projectName: z.string().min(1, 'porfavor informe um nome de projeto válido'),
    coments: z.string().min(1, 'porfavor informe um comentário válido')
  })
  .transform((field) => ({
    category: field.category,
    subCategory: field.subCategory,
    projectName: field.projectName,
    coments: field.coments
  }))
