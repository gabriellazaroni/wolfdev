import React from 'react'
import {
  ButtonsContainer,
  Container,
  Header,
  LogoImg,
  MainContainer,
  SubTitle,
  Title
} from './styles'
import logo from '../../assets/images/wolf-dev-logo.svg'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../components/common/DefaultButton'

export function RedirectToRegister() {
  const navigate = useNavigate()

  const handleNavigateToRegister = () => {
    navigate('/register')
  }

  const handleNavigateToLanding = () => {
    navigate('/')
  }
  return (
    <>
      <Header>
        <LogoImg onClick={handleNavigateToLanding} src={logo} />
      </Header>
      <Container>
        <MainContainer>
          <Title>
            Conectando você com os melhores desenvolvedores de software
          </Title>
          <SubTitle>
            A plataforma da Wolfdev facilita a contratação de desenvolvedores de
            software de ponta no Brasil. Encontre profissionais qualificados que
            atendam aos seus requisitos específicos em nossa rede avaliada e
            contrate desenvolvedores remotos com facilidade.
          </SubTitle>
          <ButtonsContainer>
            <DefaultButton
              active={true}
              color="var(--dark-900)"
              backgroundColor="#fff"
              border="0px"
              onClick={handleNavigateToRegister}
            >
              EU QUERO CONTRATAR
            </DefaultButton>
            <DefaultButton
              active={true}
              color="#fff"
              backgroundColor="var(--dark-900)"
              border="0px"
              icon={true}
              onClick={handleNavigateToRegister}
            >
              VOCÊ QUER TRABALHAR?
            </DefaultButton>
          </ButtonsContainer>
        </MainContainer>
      </Container>
    </>
  )
}
