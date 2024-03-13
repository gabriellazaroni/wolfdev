import React from 'react';

import Header from '../../../components/Header';
import DefaultButton from '../../../components/common/DefaultButton';

import { ContainerMain, ContainerText, WhatsAppLink } from './styles';
import TypingSimulator from '../../../components/TypeSimulator';

function TopSection() {
  const phoneNUmber = '5531973346346';
  const whatsAppLink = `https://wa.me/${phoneNUmber}`;

  return (
    <ContainerMain>
      <Header />
      <ContainerText>
        <TypingSimulator
          text={'Conectando você com os melhores desenvolvedores de software'}
        />
        <WhatsAppLink href={whatsAppLink} target="_blank" rel="noreferrer">
          <DefaultButton
            active={true}
            color="#fff"
            backgroundColor="#bf59fd"
            border="0px"
          >
            Quero ser wolfdev
          </DefaultButton>
        </WhatsAppLink>
      </ContainerText>
    </ContainerMain>
  );
}

export default TopSection;
