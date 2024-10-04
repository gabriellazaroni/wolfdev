import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: var(--gray-700);
  border-radius: 20px;
  z-index: 101;
  max-width: 350px;
  width: 100%;
  @media (max-width: 1200px) {
    position: fixed;
    top: 60px;
    right: 32px;
    height: 240px;
    width: 250px;
    transform: translateX(calc(100% + 32px));
    background-color: var(--gray-800);
  }

  &.active {
    transform: translateX(0);
  }
`

export const ImgLogo = styled.img`
  display: block;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const MenuItensContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 24px;
  margin-top: 30px;
`

export const IconImg = styled.img`
  display: block;
`

export const DivisorSelectContainer = styled.div`
  display: flex;
  gap: 37px;
  @media(max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const MessageErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TextMesssageError = styled.p`
  font-size: 12px;
  color: var(--red-600);
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`
