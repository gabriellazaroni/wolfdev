import React from 'react';
import DefaultButton from '../../../components/common/DefaultButton';

import { ContainerMain, ContainerText, TextSpan, Text } from './styles';

function BottomSection() {
  return (
    <ContainerMain>
      <ContainerText>
        <Text>
          Se torne um <TextSpan>WOLFDEV</TextSpan> e encontre clientes rápido e
          fácil
        </Text>
      </ContainerText>
      <DefaultButton active={true} link="/register">
        Cadastrar
      </DefaultButton>
    </ContainerMain>
  );
}

export default BottomSection;
