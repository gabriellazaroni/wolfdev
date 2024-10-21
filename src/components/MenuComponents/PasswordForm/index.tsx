import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItemButtton } from '../MenuItemButton'
import { ButtonContainer, DivisorSelectContainer, FormInputsContainer, MessageErrorContainer, TextMesssageError } from './styles'
import { CustomInput } from '../../common/CustomInput'
import DefaultButton from '../../common/DefaultButton'
import personIcon from '../../../assets/icons/person.svg'
import { PasswordInfoEditSchema } from '../../../schemas/PaswordEditSchema'

export type PasswordEditInputsProps = z.infer<typeof PasswordInfoEditSchema>;

export function PasswordForm() {
  const [modals, setModals] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PasswordEditInputsProps>({
    resolver: zodResolver(PasswordInfoEditSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  const handleOpenModal = () => {
    setModals(prevState => !prevState)
  }

  const handleFormSubmit = (data: PasswordEditInputsProps) => {
    console.log(data)
    reset()
  }
  return (
    <MenuItemButtton
      isShowing={modals}
      onRequestClose={handleOpenModal}
      title="Senha"
      icon={personIcon}
      toggleModal={handleOpenModal}
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Senha" placeHolder="Senha" {...register('password')} />
            {errors.password?.message && <TextMesssageError>{errors.password?.message}</TextMesssageError>}
          </MessageErrorContainer>
        </DivisorSelectContainer>
        <DivisorSelectContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Nova Senha" placeHolder="Nova senha" {...register('newPassword')} />
            {errors.newPassword?.message && (
              <TextMesssageError>{errors.newPassword?.message}</TextMesssageError>
            )}
          </MessageErrorContainer>
          <MessageErrorContainer>
            <CustomInput titleInput="Confirme a nova senha" placeHolder="Confirme a nova senha" {...register('confirmNewPassword')} />
            {errors.confirmNewPassword?.message && (
              <TextMesssageError>{errors.confirmNewPassword?.message}</TextMesssageError>
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
            SALVAR
          </DefaultButton>
        </ButtonContainer>
      </FormInputsContainer>
    </MenuItemButtton>
  )
}
