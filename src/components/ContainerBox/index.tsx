import React, { ReactNode } from 'react'
import {
  IconImg,
  MainContainer,
  TitleContainer,
  TitleAndValueText
} from './styles'
import projectIcon from '../../assets/icons/project.svg'

interface ContainerBoxProps {
  icon?: string
  value?: string
  title?: string
}

export function ContainerBox({ icon, value, title }: ContainerBoxProps) {
  return (
    <MainContainer>
      <IconImg src={icon} />
      <TitleContainer>
        <TitleAndValueText>{value}</TitleAndValueText>
        <TitleAndValueText>{title}</TitleAndValueText>
      </TitleContainer>
    </MainContainer>
  )
}
