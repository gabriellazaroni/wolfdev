import React from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import {
  ButtonContainer,
  MessageErrorContainer,
  FormInputsContainer,
  TextMesssageError
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HireRegisterTypeServiceDataSchema } from '../../schemas/HireRegisterTypeServiceSchema'
import { DefaultSelect } from '../../components/common/DefaultSelect'

export type HireRegisterTypeServiceInputsProps = z.infer<
  typeof HireRegisterTypeServiceDataSchema
>

export function HireRegisterTypeService() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HireRegisterTypeServiceInputsProps>({
    resolver: zodResolver(HireRegisterTypeServiceDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      service: '',
      contract: ''
    }
  })

  const handleFormSubmit = (data: HireRegisterTypeServiceInputsProps) => {
    console.log(data)
    navigate('/hireregister/companydata')
  }

  return (
    <DevRegisterFormContainer
      title="Tipo de Serviço"
      subTitle="Qual serviço voce quer contratar?"
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MessageErrorContainer>
          <DefaultSelect titleSelect="Serviço" {...register('service')}>
            <option value="desenvolvedor">Desenvolvedor</option>
            <option value="design">Design</option>
          </DefaultSelect>
          {errors.service?.message && (
            <TextMesssageError>{errors.service?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <DefaultSelect
            titleSelect="Tipo de contrato"
            {...register('contract')}
          >
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
            <option value="freelancer">Freelancer</option>
            <option value="pj">PJ</option>
            <option value="clt">CLT</option>
          </DefaultSelect>
          {errors.contract?.message && (
            <TextMesssageError>{errors.contract?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
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
