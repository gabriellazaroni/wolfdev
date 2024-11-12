import React, { ReactNode, useContext, useState } from 'react'
import {
  ImgLogo,
  MainContainer,
  MenuItensContainer
} from './styles'
import { PersonalInfoEditSchema } from '../../../schemas/PersonalInfoEditSchema'
import { z } from 'zod'
import { MenuContext } from '../../../contexts/MenuContext'
import { PersonalInfoForm } from '../PersonalInfoForm'
import { NotificationForm } from '../NotificationsForm'
import { PasswordForm } from '../PasswordForm'
import { AccountForm } from '../AccountForm'
import logo from '../../../assets/images/wolf-dev-logo.svg'

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

type MenuContainerProps = {
  maxWidth?: string
  children?: ReactNode
}

export function MenuContainer({ maxWidth = '100%', children }: MenuContainerProps) {
  const [modals, setModals] = useState({
    personalInfo: false,
    notifications: false,
    password: false,
    account: false
  })

  const { menuOpen } = useContext(MenuContext)

  return (
    <MainContainer className={menuOpen ? 'active' : ''} style={{ maxWidth }}>
      <ImgLogo src={logo} />
      <MenuItensContainer>
        <PersonalInfoForm />
        <NotificationForm />
        <PasswordForm />
        <AccountForm />
      </MenuItensContainer>
      {children}
    </MainContainer>
  )
}
