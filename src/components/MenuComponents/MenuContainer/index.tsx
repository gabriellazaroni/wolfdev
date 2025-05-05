import React, { ReactNode, useContext, useState } from 'react'
import {
  ImgLogo,
  MainContainer,
  MenuItensContainer
} from './styles'
import { PersonalInfoEditSchema } from '../../../schemas/PersonalInfoEditSchema'
import { z } from 'zod'
import { PersonalInfoForm } from '../PersonalInfoForm'
import { NotificationForm } from '../NotificationsForm'
import { PasswordForm } from '../PasswordForm'
import { AccountForm } from '../AccountForm'
import { FindDevs } from '../FindDevs'
import { HirerProfileButton } from '../HirerProfileButton'
import logo from '../../../assets/images/wolf-dev-logo.svg'

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

type MenuContainerProps = {
  maxWidth?: string
  children?: ReactNode
  findDevs?: boolean
  profileHirer?: boolean
}

export function MenuContainer({ maxWidth = '100%', children, findDevs, profileHirer }: MenuContainerProps) {
  return (
    <MainContainer style={{ maxWidth }}>
      <ImgLogo src={logo} />
      <MenuItensContainer>
        {findDevs && <FindDevs />}
        {profileHirer && <HirerProfileButton />}
        <PersonalInfoForm />
        <NotificationForm />
        <PasswordForm />
        <AccountForm />
      </MenuItensContainer>
      {children}
    </MainContainer>
  )
}
