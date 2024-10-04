import React, { useContext, useState } from 'react'

import { ButtonContainer, DivisorSelectContainer, ImgLogo, MainContainer, MenuItensContainer, MessageErrorContainer, TextMesssageError } from './styles'
import { MenuItemButtton } from '../MenuItemButton'
import { FormInputsContainer } from '../../pages/DevRegisterPersonalInformation/styles'
import { CustomInput } from '../common/CustomInput'
import { useForm } from 'react-hook-form'
import { PersonalInfoEditSchema } from '../../schemas/PersonalInfoEditSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import DefaultButton from '../common/DefaultButton'

import logo from '../../assets/images/wolf-dev-logo.svg'
import personIcon from '../../assets/icons/person.svg'
import bellIcon from '../../assets/icons/bell.svg'
import padlockIcon from '../../assets/icons/padlock.svg'
import circleIcon from '../../assets/icons/purple-circle.svg'
import { MenuContext } from '../../pages/DevProfile'

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

export function MenuContainer() {
  const [modals, setModals] = useState({
    personalInfo: false,
    notifications: false,
    password: false,
    account: false
  })

  const { menuOpen, setMenuOpen } = useContext(MenuContext)

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

  const handleToggleModal = (modalName: keyof typeof modals) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }))
  }

  const handleFormSubmit = (data: PersonalInfoEditInputsProps, modalName: keyof typeof modals) => {
    console.log(data)
    setModals((prevState) => ({
      ...prevState,
      [modalName]: false
    }))
    reset()
  }

  return (
    <MainContainer className={menuOpen ? 'active' : ''}>
      <ImgLogo src={logo} />
      <MenuItensContainer>
        <MenuItemButtton
          isShowing={modals.personalInfo}
          onRequestClose={() => handleToggleModal('personalInfo')}
          title="Informações Pessoais"
          icon={personIcon}
          toggleModal={() => handleToggleModal('personalInfo')}
        >
          <FormInputsContainer onSubmit={handleSubmit((data) => handleFormSubmit(data, 'personalInfo'))}>
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
                AVANÇAR
              </DefaultButton>
            </ButtonContainer>
          </FormInputsContainer>
        </MenuItemButtton>

        <MenuItemButtton
          isShowing={modals.notifications}
          onRequestClose={() => handleToggleModal('notifications')}
          title="Notificações"
          icon={bellIcon}
          toggleModal={() => handleToggleModal('notifications')}
        >
          <h1>gabriel</h1>
        </MenuItemButtton>

        <MenuItemButtton
          isShowing={modals.password}
          onRequestClose={() => handleToggleModal('password')}
          title="Senha"
          icon={padlockIcon}
          toggleModal={() => handleToggleModal('password')}
        >
          <h1>gabriel</h1>
        </MenuItemButtton>

        <MenuItemButtton
          isShowing={modals.account}
          onRequestClose={() => handleToggleModal('account')}
          title="Conta"
          icon={circleIcon}
          toggleModal={() => handleToggleModal('account')}
        >
          <h1>gabriel</h1>
        </MenuItemButtton>
      </MenuItensContainer>
    </MainContainer>
  )
}
