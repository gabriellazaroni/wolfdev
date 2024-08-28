import React, { useCallback } from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import { DefaultInput } from '../../components/common/DefaultInput'
import { useForm } from 'react-hook-form'
import {
  ButtonContainer,
  DivisorSelectContainer,
  SelectsContainer
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const AdressUserDataSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  complemento: z.string(),
  unidade: z.string(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string()
})

type RegisterDevAdressInputs = z.infer<typeof AdressUserDataSchema>

export function DevRegister() {
  const { register, handleSubmit } = useForm<RegisterDevAdressInputs>({
    resolver: zodResolver(AdressUserDataSchema),
    defaultValues: {
      cep: '',
      logradouro: '',
      complemento: '',
      unidade: '',
      bairro: '',
      localidade: '',
      uf: ''
    }
  })

  return (
    <>
      <DevRegisterFormContainer
        title="Informações Pessoais"
        subTitle="Para começar, compartilhe suas informaões básicas"
      >
        <SelectsContainer>
          <DefaultSelect name="pais" title="País">
            <option value="">Selecione</option>
          </DefaultSelect>
          <DivisorSelectContainer>
            <DefaultInput
              name="cep"
              title="Cep"
              placeholder="Digite seu cep"
              type="text"
            />
            <DefaultSelect name="estado" title="Estado" max={1}>
              <option value="">Selecione</option>
            </DefaultSelect>{' '}
          </DivisorSelectContainer>
          <DivisorSelectContainer>
            <DefaultSelect name="cidade" title="Cidade">
              <option value="">Selecione</option>
            </DefaultSelect>
            <DefaultSelect name="bairro" title="Bairro">
              <option value="">Selecione</option>
            </DefaultSelect>
          </DivisorSelectContainer>
          <DivisorSelectContainer>
            <DefaultSelect name="numero" title="Número">
              <option value="">Selecione</option>
            </DefaultSelect>
            <DefaultSelect name="complemento" title="Complemento">
              <option value="">Selecione</option>
            </DefaultSelect>
          </DivisorSelectContainer>
          <DefaultSelect name="fuso horario" title="Fuso Horário">
            <option value="">Selecione</option>
          </DefaultSelect>
          <ButtonContainer>
            <DefaultButton
              active
              backgroundColor="var(--purple-500)"
              color="var(--white)"
              border="var(--purple-500)"
            >
              AVANÇAR
            </DefaultButton>
          </ButtonContainer>
        </SelectsContainer>
      </DevRegisterFormContainer>
    </>
  )
}
