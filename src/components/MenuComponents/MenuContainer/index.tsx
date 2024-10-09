import React, { useContext, useState } from 'react'
import {
  ImgLogo,
  MainContainer,
  MenuItensContainer
} from './styles'
import { MenuItemButtton } from '../MenuItemButton'
import { PersonalInfoEditSchema } from '../../../schemas/PersonalInfoEditSchema'
import { z } from 'zod'
import { MenuContext } from '../../../contexts/MenuContext'

import logo from '../../../assets/images/wolf-dev-logo.svg'
import padlockIcon from '../../../assets/icons/padlock.svg'
import circleIcon from '../../../assets/icons/purple-circle.svg'
import { PersonalInfoForm } from '../PersonalInfoForm'
import { NotificationForm } from '../NotificationsForm'
import { PasswordForm } from '../PasswordForm'

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

export function MenuContainer() {
  const [modals, setModals] = useState({
    personalInfo: false,
    notifications: false,
    password: false,
    account: false
  })

  const { menuOpen } = useContext(MenuContext)

  const handleToggleModal = (modalName: keyof typeof modals) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }))
  }

  return (
    <MainContainer className={menuOpen ? 'active' : ''}>
      <ImgLogo src={logo} />
      <MenuItensContainer>
        <PersonalInfoForm />
        <NotificationForm />
        <PasswordForm />

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
