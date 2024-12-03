import React, { useState } from 'react'
import DefaultButton from '../common/DefaultButton'
import {
  HeaderMain,
  ImageLogo,
  HamburgerIcon,
  MenuItens,
  ContainerButtons,
  UlMenuContainer,
  LiMenuContainer,
  ItensAndIconsContainer,
  IconImg
} from './styles'

import { useNavigate } from 'react-router-dom'
import { MenuHamburgerModal } from '../MenuHamburgerModal'
import WolfDevlogo from '../../assets/images/wolf-dev-logo.svg'
import loginIcon from '../../assets/icons/login.svg'
import registerIcon from '../../assets/icons/register.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  function handleCloseMenuHamburgerModal() {
    setIsMenuOpen(false)
  }

  const navigate = useNavigate()

  function handleNavigateLogin() {
    navigate('/login')
  }

  function handleNavigateSignup() {
    navigate('/redirecttoregister')
  }

  return (
    <HeaderMain>
      <ImageLogo src={WolfDevlogo} />
      <ContainerButtons>
        <DefaultButton active={false} link="/login">
          ENTRAR
        </DefaultButton>
        <DefaultButton active={true} link="/redirecttoregister">
          CADASTRAR
        </DefaultButton>
      </ContainerButtons>

      <MenuHamburgerModal isShowing={isMenuOpen} onRequestClose={handleCloseMenuHamburgerModal}>
        <UlMenuContainer>
          <ItensAndIconsContainer>
            <IconImg src={loginIcon} />
            <LiMenuContainer onClick={handleNavigateLogin}>
              Entrar
            </LiMenuContainer>
          </ItensAndIconsContainer>
          <ItensAndIconsContainer>
            <IconImg src={registerIcon} />
            <LiMenuContainer onClick={handleNavigateSignup}>
              Cadastrar
            </LiMenuContainer>
          </ItensAndIconsContainer>
        </UlMenuContainer>
      </MenuHamburgerModal>
      <HamburgerIcon onClick={toggleMenu} isOpen={isMenuOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
    </HeaderMain>
  )
}

export default Header
