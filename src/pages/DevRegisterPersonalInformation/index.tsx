import React from 'react'
import { DevRegisterFormContainer } from '../../components/DevRegisterFormContainer'
import {
  ButtonContainer,
  DivisorSelectContainer,
  MessageErrorContainer,
  FormInputsContainer,
  TextMesssageError
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { CustomInput } from '../../components/common/CustomInput'
import { useCep } from '../../hooks/useCep'

export type AddressProps = {
  bairro: string
  uf: string
  logradouro: string
  localidade: string
}

export function DevRegisterPersonalInformation() {
  const { errors, handleFormSubmit, handleSubmit, register } = useCep()
  return (
    <DevRegisterFormContainer
      title="Informações Pessoais"
      subTitle="Para começar, compartilhe suas informaões básicas"
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput
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
              titleInput="Estado"
              placeHolder="Estado"
              type="text"
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
              titleInput="Cidade"
              placeHolder="Cidade"
              type="text"
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
              titleInput="Bairro"
              placeHolder="Bairro"
              type="text"
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
              titleInput="Rua"
              placeHolder="Rua"
              type="text"
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
              titleInput="Número"
              placeHolder="Número"
              type="text"
            />
            {errors.address?.number?.message && (
              <TextMesssageError>
                {errors.address?.number?.message}
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
