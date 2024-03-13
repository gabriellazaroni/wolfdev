import styled from 'styled-components';
import backgroundImg from '../../../assets/images/background-code.svg';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-image: url(${backgroundImg});
  flex-direction: column;
  @media (max-width: 649px) {
    height: 65vh;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1000px;
  padding: 0 4rem;
  margin: auto;
  text-align: center;
  @media (max-width: 649px) {
    gap: 0px;
    margin: 80px auto;
  }
`;

export const PurpleText = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--purple-500);
`;

export const TextSpan = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--purple-500);
`;

export const WhatsAppLink = styled.a`
  text-decoration: none;
`;
