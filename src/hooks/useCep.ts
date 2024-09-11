import { useForm } from 'react-hook-form'
import { AddressProps } from '../pages/DevRegisterPersonalInformation'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressUserDataSchema } from '../schemas/AdressSchema'
import { useCallback, useEffect } from 'react'
import axios from 'axios'
import { zipCodeMask } from '../utils/zipCodeMask'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

export type RegisterDevAddressInputsProps = z.infer<
  typeof AddressUserDataSchema
>

export const useCep = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<RegisterDevAddressInputsProps>({
    resolver: zodResolver(AddressUserDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      address: {
        zipCode: '',
        district: '',
        number: '',
        state: '',
        street: '',
        city: ''
      }
    }
  })

  const zipCode = watch('address.zipCode')

  const handleFormSubmit = (data: RegisterDevAddressInputsProps) => {
    console.log(data)
    navigate('/devregister/professionalinformation')
  }

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue('address.city', data.localidade)
      setValue('address.street', data.logradouro)
      setValue('address.state', data.uf)
      setValue('address.district', data.bairro)
    },
    [setValue]
  )

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      )
      handleSetData(data)
    },
    [handleSetData]
  )

  useEffect(() => {
    setValue('address.zipCode', zipCodeMask(zipCode))
    if (zipCode.length !== 9) return
    handleFetchAddress(zipCode)
  }, [handleFetchAddress, zipCode, setValue])
  return {
    errors,
    handleSubmit,
    register,
    handleFormSubmit
  }
}
