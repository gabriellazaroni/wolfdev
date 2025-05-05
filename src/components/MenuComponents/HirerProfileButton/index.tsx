import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconAndItensMenuContainer, IconImg, TextIconMenu } from './styles'
import profileIcon from '../../../assets/icons/person.svg'

export function HirerProfileButton() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/hirerprofile')
  }

  return (
    <IconAndItensMenuContainer>
      <IconImg src={profileIcon} />
      <TextIconMenu onClick={handleNavigate}>Perfil</TextIconMenu>
    </IconAndItensMenuContainer>
  )
}
