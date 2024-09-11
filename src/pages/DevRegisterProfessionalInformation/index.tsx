import React, { useCallback } from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import {
  ButtonContainer,
  DivisorSelectContainer,
  MessageErrorContainer,
  FormInputsContainer,
  TextMesssageError
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ProfessionalInformationDataSchema } from '../../schemas/ProfessionalInformationSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type ProfessionalInformationInputsProps = z.infer<
  typeof ProfessionalInformationDataSchema
>

export type ProfessionalProps = {
  developer: string
  specialty: string
  seniority: string
  skills: string
}

export function DevRegisterProfessionalInformation() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfessionalInformationInputsProps>({
    resolver: zodResolver(ProfessionalInformationDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      developer: '',
      specialty: '',
      seniority: '',
      skills: ''
    }
  })

  const handleFormSubmit = (data: ProfessionalInformationInputsProps) => {
    console.log(data)
    // navigate('/devregister/professionalinformation')
  }

  return (
    <DevRegisterFormContainer
      title="Informações Profissionais"
      subTitle="Para começar, compartilhe suas informaões profissionais básicas"
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MessageErrorContainer>
          <DefaultSelect titleSelect="Eu sou" {...register('developer')}>
            <option value="desenvolvedor">Desenvolvedor</option>
            <option value="freelancer">Freelancer</option>
          </DefaultSelect>
          {errors.developer?.message && (
            <TextMesssageError>{errors.developer?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <DefaultSelect
              titleSelect="Especialidade"
              {...register('specialty')}
            >
              <option value="backend">Back-end</option>
              <option value="frontend">Front-end</option>
              <option value="fullstack">Full-stack</option>
            </DefaultSelect>
            {errors.developer?.message && (
              <TextMesssageError>{errors.specialty?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <DefaultSelect titleSelect="Senioridade" {...register('seniority')}>
              <option value="junior">Junior</option>
              <option value="pleno">Pleno</option>
              <option value="senior">Senior</option>
            </DefaultSelect>
            {errors.developer?.message && (
              <TextMesssageError>{errors.seniority?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
        </DivisorSelectContainer>
        <MessageErrorContainer>
          <DefaultSelect
            titleSelect="Habilidades nas quais você tem mais experiência (máximo de 10)"
            {...register('skills')}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="csharp">C#</option>
          </DefaultSelect>
          <TextMesssageError>{errors.skills?.message}</TextMesssageError>
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
