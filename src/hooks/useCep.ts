import { useForm } from 'react-hook-form'
import { AddressProps, RegisterDevAddressInputs } from '../pages/DevRegister'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressUserDataSchema } from '../schemas/AdressSchema'
import { useCallback, useEffect } from 'react'
import axios from 'axios'

export const useCep = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<RegisterDevAddressInputs>({
    resolver: zodResolver(AddressUserDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      address: {
        zipCode: '',
        district: '',
        number: 0,
        state: '',
        street: '',
        city: ''
      }
    }
  })

  const zipCode = watch('address.zipCode')

  const handleFormSubmit = (data: RegisterDevAddressInputs) => {
    console.log(data)
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
      console.log(data)
    },
    [handleSetData]
  )

  function zipCodeMask(value: string): string {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .substring(0, 9)
  }

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
