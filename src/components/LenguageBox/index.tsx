import React from 'react'

import { MainContainer, TitleContainer } from './styles'

interface LenguageBoxProps {
  name?: string
}

export function LenguageBox({ name }: LenguageBoxProps) {
  return (
    <MainContainer>
      <TitleContainer>{name}</TitleContainer>
    </MainContainer>
  )
}
