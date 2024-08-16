import styled from 'styled-components'
import backgroundImg from '../../../assets/images/background-earth.svg'

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-image: url(${backgroundImg});
  flex-direction: column;
  @media (max-width: 649px) {
    height: 65vh;
    padding: 0 40px;
  }
`

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  max-width: 23rem;
  margin: 0.281rem 0 2rem 0;
`

export const Text = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: var(--white);
  text-align: center;
`
export const TextSpan = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--purple-500);
`
