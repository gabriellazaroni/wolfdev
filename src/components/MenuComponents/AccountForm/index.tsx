import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItemButtton } from '../MenuItemButton'
import {
  ButtonContainer,
  ContainerMessageText,
  DetailMessgaeContainer,
  FormInputsContainer,
  MessageContainer,
  MessageErrorContainer,
  OptionSelect,
  SubTitleMessage,
  TextMesssageError,
  TitleAndMessageContainer,
  TitleMessage,
  TitleText
} from './styles'
import DefaultButton from '../../common/DefaultButton'
import { DefaultSelect } from '../../common/DefaultSelect'
import circleIcon from '../../../assets/icons/purple-circle.svg'
import { AccountEditSchema } from '../../../schemas/AccountSchema'

export type AccountSelectProps = z.infer<typeof AccountEditSchema>;

export function AccountForm() {
  const [modals, setModals] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AccountSelectProps>({
    resolver: zodResolver(AccountEditSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      reasonForClosing: ''
    }
  })

  const handleOpenModal = () => {
    setModals(prevState => !prevState)
  }

  const handleFormSubmit = (data: AccountSelectProps) => {
    console.log(data)
    reset()
  }
  return (
    <MenuItemButtton
      isShowing={modals}
      onRequestClose={handleOpenModal}
      title="Conta"
      icon={circleIcon}
      toggleModal={handleOpenModal}
    >
      <FormInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <TitleAndMessageContainer>
          <TitleText>Encerrar conta na WOLFDEV</TitleText>
          <MessageContainer>
            <DetailMessgaeContainer />
            <ContainerMessageText>
              <TitleMessage>Tem certeza que deseja fechar a sua conta?</TitleMessage>
              <SubTitleMessage>
                Se você fechar a sua conta na WOLFDEV, você não será
                capaz de fazer login, nem de receber qualquer comunicação
                do site. Fechar sua conta significa que você não terá acesso
                aos projetos que você está desenvolvendo (e os projetos dos
                quais você está participando também).
              </SubTitleMessage>
            </ContainerMessageText>
          </MessageContainer>
        </TitleAndMessageContainer>
        <MessageErrorContainer>
          <DefaultSelect
            titleSelect="Motivo do fechamento"
            placeHolder="Selectione"
            {...register('reasonForClosing')}
          >
            <OptionSelect>Estou em um emprego</OptionSelect>
            <OptionSelect>Tenho que viajar</OptionSelect>
            <OptionSelect>Outro motivo</OptionSelect>
          </DefaultSelect>
          {errors.reasonForClosing?.message && (
            <TextMesssageError>{errors.reasonForClosing?.message}</TextMesssageError>
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
            Sim, quero fechar minha conta
          </DefaultButton>
        </ButtonContainer>
      </FormInputsContainer>
    </MenuItemButtton>
  )
}
