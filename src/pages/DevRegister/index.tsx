import React from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import {
  ButtonContainer,
  DivisorSelectContainer,
  MessageErrorContainer,
  SelectsContainer,
  TextMesssageError
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { z } from 'zod'
import { CustomInput } from '../../components/common/CustomInput'
import { AddressUserDataSchema } from '../../schemas/AdressSchema'
import { useCep } from '../../hooks/useCep'

export type RegisterDevAddressInputs = z.infer<typeof AddressUserDataSchema>
export type AddressProps = {
  bairro: string
  uf: string
  logradouro: string
  localidade: string
  number: number
}

export function DevRegister() {
  const { errors, handleFormSubmit, handleSubmit, register } = useCep()
  return (
    <>
      <DevRegisterFormContainer
        title="Informações Pessoais"
        subTitle="Para começar, compartilhe suas informaões básicas"
      >
        <SelectsContainer onSubmit={handleSubmit(handleFormSubmit)}>
          {/* <DefaultSelect name="pais" titleSelect="País">
            <option value="">Selecione</option>
          </DefaultSelect> */}
          <DivisorSelectContainer>
            <MessageErrorContainer>
              <CustomInput
                name="cep"
                titleInput="Cep"
                placeHolder="Digite seu cep"
                type="text"
                {...register('address.zipCode')}
              />
              {errors.address?.zipCode?.message && (
                <TextMesssageError>
                  {errors.address?.zipCode?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
            <MessageErrorContainer>
              <CustomInput
                {...register('address.state')}
                name="estado"
                titleInput="Estado"
                placeHolder="Estado"
              />
              {errors.address?.state?.message && (
                <TextMesssageError>
                  {errors.address?.state?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
          </DivisorSelectContainer>
          <DivisorSelectContainer>
            <MessageErrorContainer>
              <CustomInput
                {...register('address.city')}
                name="cidade"
                titleInput="Cidade"
                placeHolder="Cidade"
              />
              {errors.address?.city?.message && (
                <TextMesssageError>
                  {errors.address?.city?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
            <MessageErrorContainer>
              <CustomInput
                {...register('address.district')}
                name="bairro"
                titleInput="Bairro"
                placeHolder="Bairro"
              />
              {errors.address?.district?.message && (
                <TextMesssageError>
                  {errors.address?.district?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
          </DivisorSelectContainer>
          <DivisorSelectContainer>
            <MessageErrorContainer>
              <CustomInput
                {...register('address.street')}
                name="rua"
                titleInput="Rua"
                placeHolder="Rua"
              />
              {errors.address?.street?.message && (
                <TextMesssageError>
                  {errors.address?.street?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
            <MessageErrorContainer>
              <CustomInput
                {...register('address.number')}
                name="numero"
                titleInput="Número"
                placeHolder="Número"
              />
              {errors.address?.number?.message && (
                <TextMesssageError>
                  {errors.address?.number?.message}
                </TextMesssageError>
              )}
            </MessageErrorContainer>
          </DivisorSelectContainer>
          {/* <DefaultSelect name="fuso horario" title="Fuso Horário">
            <option value="">Selecione</option>
          </DefaultSelect> */}
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
