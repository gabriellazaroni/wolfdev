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
import { ProjectsAndExperienceDataSchema } from '../../schemas/ProjectsAndExperienceSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '../../components/common/CustomInput'

export type ProjectsAndExperienceInputsProps = z.infer<
  typeof ProjectsAndExperienceDataSchema
>

export function DevRegisterProjectsAndExperience() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProjectsAndExperienceInputsProps>({
    resolver: zodResolver(ProjectsAndExperienceDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      github: '',
      linkedin: '',
      site: ''
    }
  })

  const handleFormSubmit = (data: ProjectsAndExperienceInputsProps) => {
    console.log(data)
    navigate('/devprofile')
  }

  return (
    <DevRegisterFormContainer
      title="Projetos e Experiência"
      subTitle="Compartilhe informações adicionais como GitHub, LinkedIn e portfólio."
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MessageErrorContainer>
          <CustomInput
            titleInput="GitHub"
            placeHolder="https://github.com/nomedeusuário"
            {...register('github')}
          />
          {errors.github?.message && (
            <TextMesssageError>{errors.github?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <CustomInput
            titleInput="Linkedin"
            placeHolder="https://linkedin.com/nomedeusuário"
            {...register('linkedin')}
          />
          {errors.linkedin?.message && (
            <TextMesssageError>{errors.linkedin?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <CustomInput
            titleInput="Portifólio ou site"
            placeHolder="URL"
            {...register('site')}
          />
          {errors.site?.message && (
            <TextMesssageError>{errors.site?.message}</TextMesssageError>
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
