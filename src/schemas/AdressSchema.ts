import { z } from 'zod'

export const AddressUserDataSchema = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, 'porfavor informe um CEP válido'),
      district: z.string().min(1, 'porfavor informe um bairro válido'),
      number: z.number().min(1, 'porfavor informe um número válido'),
      state: z.string().min(1, 'porfavor informe um estado válido'),
      street: z.string().min(1, 'porfavor informe um rua válida'),
      city: z.string().min(1, 'porfavor informe um ciadade válida')
    })
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      district: field.address.district,
      number: field.address.number,
      state: field.address.state,
      street: field.address.street,
      city: field.address.city
    }
  }))
