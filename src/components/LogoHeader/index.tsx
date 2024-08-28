import React from 'react'
import { Header, LogoImg } from './styles'
import logo from '../../assets/images/wolf-dev-logo.svg'
import { useNavigate } from 'react-router-dom'

export function LogoHeader() {
  const navigate = useNavigate()

  const handleNavigateToLanding = () => {
    navigate('/')
  }
  return (
    <Header>
      <LogoImg onClick={handleNavigateToLanding} src={logo} />
    </Header>
  )
}
