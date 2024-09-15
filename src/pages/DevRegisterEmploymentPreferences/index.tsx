import React, { useCallback, useEffect } from 'react'
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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmploymentPreferencesDataSchema } from '../../schemas/EmploymentPreferencesSchema'
import { CustomInput } from '../../components/common/CustomInput'
import { salaryMask } from '../../utils/salaryMask'

export type EmploymentPreferencesInputsProps = z.infer<
  typeof EmploymentPreferencesDataSchema
>

export function DevRegisterEmploymentPreferences() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<EmploymentPreferencesInputsProps>({
    resolver: zodResolver(EmploymentPreferencesDataSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      contract: '',
      wageMonth: '',
      wageHour: '',
      availabilityStart: '',
      availabilityEnd: ''
    }
  })

  const handleFormSubmit = (data: EmploymentPreferencesInputsProps) => {
    console.log(data)
    // navigate('/devregister/pojectsandexperience')
  }

  const wageMonth = watch('wageMonth')
  const wageHour = watch('wageHour')

  useEffect(() => {
    setValue('wageMonth', salaryMask(wageMonth))
    setValue('wageHour', salaryMask(wageHour))
  }, [wageMonth, wageHour, setValue])

  return (
    <DevRegisterFormContainer
      title="Preferências de emprego "
      subTitle="Compartilhe suas preferências, para personalizar os tipos de emprego aos quais você está aberto."
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MessageErrorContainer>
          <DefaultSelect
            titleSelect="Tipo de contrato"
            {...register('contract')}
          >
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-Time</option>
            <option value="freelancer">Freelancer</option>
            <option value="pj">PJ</option>
            <option value="clt">CLT</option>
          </DefaultSelect>
          {errors.contract?.message && (
            <TextMesssageError>{errors.contract?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <CustomInput
            titleInput="Salário desejado - mensal"
            placeHolder="Valor em real R$"
            {...register('wageMonth')}
          />

          {errors.wageMonth?.message && (
            <TextMesssageError>{errors.wageMonth?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <MessageErrorContainer>
          <CustomInput
            titleInput="Salário desejado - mensal"
            placeHolder="Valor em real R$"
            {...register('wageHour')}
          />
          {errors.wageHour?.message && (
            <TextMesssageError>{errors.wageHour?.message}</TextMesssageError>
          )}
        </MessageErrorContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <DefaultSelect
              titleSelect="Disponibildade de horário"
              placeHolder="De"
              {...register('availabilityStart')}
            >
              <option>08:00</option>
            </DefaultSelect>
            <TextMesssageError>
              {errors.availabilityStart?.message && (
                <TextMesssageError>
                  {errors.availabilityStart?.message}
                </TextMesssageError>
              )}
            </TextMesssageError>
          </MessageErrorContainer>
          <MessageErrorContainer>
            <DefaultSelect
              {...register('availabilityEnd')}
              titleSelect={'\u200B'}
              placeHolder="Até"
            >
              <option>18:00</option>
            </DefaultSelect>
            <TextMesssageError>
              {errors.availabilityEnd?.message && (
                <TextMesssageError>
                  {errors.availabilityEnd?.message}
                </TextMesssageError>
              )}
            </TextMesssageError>
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
