import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconAndItensMenuContainer, IconImg, TextIconMenu } from './styles'
import findDevIcon from '../../../assets/icons/find-dev.svg'

interface FindDevsProps {
  title?: string
  icon?: string
}

export function FindDevs({ title, icon }: FindDevsProps) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/feedhirer')
  }

  return (
    <IconAndItensMenuContainer>
      <IconImg src={findDevIcon} />
      <TextIconMenu onClick={handleNavigate}>Encontre Devs</TextIconMenu>
    </IconAndItensMenuContainer>
  )
}
