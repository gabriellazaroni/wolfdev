import React, { useState } from 'react'
import { z } from 'zod'
import { PersonalInfoEditSchema } from '../../../schemas/PersonalInfoEditSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItemButtton } from '../MenuItemButton'
import { ButtonContainer, DivisorSelectContainer, FormInputsContainer, MessageErrorContainer, TextMesssageError } from './styles'
import { CustomInput } from '../../common/CustomInput'
import DefaultButton from '../../common/DefaultButton'
import personIcon from '../../../assets/icons/person.svg'

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

export function PersonalInfoForm() {
  const [modals, setModals] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PersonalInfoEditInputsProps>({
    resolver: zodResolver(PersonalInfoEditSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      name: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      country: '',
      birth: ''
    }
  })

  const handleOpenModal = () => {
    setModals(prevState => !prevState)
  }

  const handleFormSubmit = (data: PersonalInfoEditInputsProps) => {
    console.log(data)
    reset()
  }

  return (
    <MenuItemButtton
      isShowing={modals}
      onRequestClose={handleOpenModal}
      title="Informações Pessoais"
      icon={personIcon}
      toggleModal={handleOpenModal}
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Eu sou" placeHolder="Nome" {...register('name')} />
            {errors.name?.message && <TextMesssageError>{errors.name?.message}</TextMesssageError>}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Sobrenome" placeHolder="Sobrenome" {...register('lastName')} />
            {errors.lastName?.message && (
              <TextMesssageError>{errors.lastName?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
        </DivisorSelectContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Telefone" placeHolder="Telefone" {...register('phoneNumber')} />
            {errors.phoneNumber?.message && (
              <TextMesssageError>{errors.phoneNumber?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Email" placeHolder="Email" {...register('email')} />
            {errors.email?.message && <TextMesssageError>{errors.email?.message}</TextMesssageError>}
          </MessageErrorContainer>
        </DivisorSelectContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="País" placeHolder="País" {...register('country')} />
            {errors.country?.message && <TextMesssageError>{errors.country?.message}</TextMesssageError>}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Nascimento" placeHolder="Nascimento" {...register('birth')} />
            {errors.birth?.message && <TextMesssageError>{errors.birth?.message}</TextMesssageError>}
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
            SALVAR
          </DefaultButton>
        </ButtonContainer>
      </FormInputsContainer>
    </MenuItemButtton>
  )
}
