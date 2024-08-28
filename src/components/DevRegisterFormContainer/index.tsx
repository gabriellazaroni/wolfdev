import React, { ReactNode } from 'react'
import {
  Container,
  FormContainer,
  SubTitleText,
  TitleContainer,
  TitleText
} from './styles'

interface DevRegisterFormContainerProps {
  title: string
  subTitle: string
  children?: ReactNode
}

export function DevRegisterFormContainer({
  title,
  subTitle,
  children
}: DevRegisterFormContainerProps) {
  return (
    <Container>
      <TitleContainer>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subTitle}</SubTitleText>
      </TitleContainer>
      <FormContainer>{children}</FormContainer>
    </Container>
  )
}
