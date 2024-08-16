import React from 'react'

import DefaultButton from '../../../components/common/DefaultButton'
import SeniorityTier from '../../../components/SeniorityTier'

import {
  ContainerMain,
  ContainerTechSectionOne,
  ContainerText,
  Title,
  Subtitle,
  ContainerTechTierSection
} from './styles'

function MidleSection() {
  return (
    <>
      <ContainerMain>
        <ContainerText>
          <Title>Busque por</Title>
          <Subtitle>LINGUAGENS DE PROGRAMAÇÃO</Subtitle>
        </ContainerText>
        <ContainerTechSectionOne>
          <DefaultButton active={false}>Java</DefaultButton>
          <DefaultButton active={false}>Python</DefaultButton>
          <DefaultButton active={false}>React JS</DefaultButton>
          <DefaultButton active={false}>Node JS</DefaultButton>
        </ContainerTechSectionOne>
        <ContainerTechSectionOne>
          <DefaultButton active={false}>JavaScript</DefaultButton>
          <DefaultButton active={false}>PHP</DefaultButton>
          <DefaultButton active={false}>Android</DefaultButton>
          <DefaultButton active={false}>Swift</DefaultButton>
        </ContainerTechSectionOne>
        <ContainerTechSectionOne>
          <DefaultButton active={false}>React Native</DefaultButton>
          <DefaultButton active={false}>Flutter</DefaultButton>
          <DefaultButton active={false}>Next</DefaultButton>
          <DefaultButton active={false}>Ruby</DefaultButton>
        </ContainerTechSectionOne>
        <ContainerTechSectionOne>
          <DefaultButton active={false}>C</DefaultButton>
          <DefaultButton active={false}>C++</DefaultButton>
          <DefaultButton active={false}>C#</DefaultButton>
          <DefaultButton active={false}>R</DefaultButton>
        </ContainerTechSectionOne>
      </ContainerMain>
      <ContainerMain>
        <ContainerText>
          <Title>Busque por</Title>
          <Subtitle>SENIORIDADE</Subtitle>
        </ContainerText>
        <ContainerTechTierSection>
          <SeniorityTier tier={3} />
          <SeniorityTier tier={2} />
          <SeniorityTier tier={1} />
        </ContainerTechTierSection>
      </ContainerMain>
    </>
  )
}

export default MidleSection
