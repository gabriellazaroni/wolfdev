import React, { useState } from 'react';

import DefaultButton from '../common/DefaultButton';

import {
  HeaderMain,
  ImageLogo,
  HamburgerIcon,
  MenuItens,
  ContainerButtons,
  UlMenuContainer,
  LiMenuContainer
} from './styles';

import WolfDevlogo from '../../assets/images/wolf-dev-logo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  function handleNavigateLogin() {
    navigate('/login');
  }

  function handleNavigateSignup() {
    navigate('/register');
  }

  return (
    <HeaderMain>
      <ImageLogo src={WolfDevlogo} />
      <ContainerButtons>
        <DefaultButton active={false} link="/login">
          ENTRAR
        </DefaultButton>
        <DefaultButton active={true} link="/register">
          CADASTRAR
        </DefaultButton>
      </ContainerButtons>
      <MenuItens isOpen={isMenuOpen}>
        <UlMenuContainer>
          <LiMenuContainer onClick={handleNavigateLogin}>
            Entrar
          </LiMenuContainer>
          <LiMenuContainer onClick={handleNavigateSignup}>
            Cadastrar
          </LiMenuContainer>
        </UlMenuContainer>
      </MenuItens>
      <HamburgerIcon onClick={toggleMenu} isOpen={isMenuOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
    </HeaderMain>
  );
}

export default Header;
