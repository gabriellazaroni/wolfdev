import React from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import {
  ButtonContainer,
  MessageErrorContainer,
  FormInputsContainer,
  TextMesssageError,
  DivisorSelectContainer
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HireRegisterTypeServiceDataSchema } from '../../schemas/HireRegisterTypeServiceSchema'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import { HireRegisterCompanyDataSchema } from '../../schemas/HireRegisterCompanyData'
import { CustomInput } from '../../components/common/CustomInput'

export type HireRegisterCompanyDataProps = z.infer<
  typeof HireRegisterCompanyDataSchema
>

export function HireRegisterCompanyData() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HireRegisterCompanyDataProps>({
    resolver: zodResolver(HireRegisterCompanyDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      email: '',
      cnpj: '',
      name: '',
      employeeNumber: ''
    }
  })

  const handleFormSubmit = (data: HireRegisterCompanyDataProps) => {
    console.log(data)
    // navigate('/devregister/employmentpreferences')
  }

  return (
    <DevRegisterFormContainer
      title="Tipo de Serviço"
      subTitle="Qual serviço voce quer contratar?"
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MessageErrorContainer>
          <CustomInput
            titleInput="Email da empresa"
            placeHolder="email@empresa.com"
            {...register('email')}
          />
          {errors.email?.message && (
            <TextMesssageError>{errors.email?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <CustomInput
            titleInput="CNPJ da empresa"
            placeHolder="XX.XXX.XXX/0001-XX"
            {...register('cnpj')}
          />
          {errors.cnpj?.message && (
            <TextMesssageError>{errors.cnpj?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput
              titleInput="Nome da Empresa"
              placeHolder="Nome da Empresa"
              {...register('name')}
            />
            {errors.name?.message && (
              <TextMesssageError>{errors.name?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <DefaultSelect
              titleSelect="Número de funcionários"
              {...register('employeeNumber')}
            >
              <option>0 - 1</option>
              <option>1 - 5</option>
              <option>5 - 10</option>
              <option>10 +</option>
            </DefaultSelect>
            {errors.employeeNumber?.message && (
              <TextMesssageError>
                {errors.employeeNumber?.message}
              </TextMesssageError>
            )}
          </MessageErrorContainer>
        </DivisorSelectContainer>
        <ButtonContainer>
          <DefaultButton
            active
            backgroundColor="var(--purple-500)"
            color="var(--white)"
            border="var(--purple-500)"
            type="submit"
          >
            AVANÇAR
          </DefaultButton>
        </ButtonContainer>
      </FormInputsContainer>
    </DevRegisterFormContainer>
  )
}
