import React from 'react'
import { Outlet } from 'react-router-dom'
import { LogoHeader } from '../../components/LogoHeader'
import { LayoutContainer, MainContainer } from './styles'

export function LayoutRegister() {
  return (
    <MainContainer>
      <LogoHeader />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </MainContainer>
  )
}
