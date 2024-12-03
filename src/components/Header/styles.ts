import styled from 'styled-components'

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ImageLogo = styled.img`
  display: flex;
  margin-left: 32px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`

export const MenuItens = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  visibility: ${({ isOpen }) => (isOpen ? 'flex' : 'hidden')};
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-width: 130px;
  border-radius: 10px;
  top: 60px;
  right: 40px;
  z-index: 2;
  background-color: var(--dark-500);
`

export const ItensAndIconsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const UlMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  align-items: start;
  color: var(--white);
  list-style: none;
  font-size: 20px;
`

export const LiMenuContainer = styled.li`
  cursor: pointer;
  font-weight: 700;
`

export const IconImg = styled.img`
  display: block;
  width: 20px;
  fill: #bf59fd;
`

export const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  div {
    width: 25px;
    height: 2px;
    background-color: #fff;
    margin: 4px 0;
    transition: transform 0.4s ease-in-out;
  }
  @media (max-width: 768px) {
    display: flex;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
    div:first-child {
      opacity: 0;
    }
    div:nth-child(2) {
      transform: rotate(45deg) translate(-1px, 10px);
    }
    div:last-child {
      transform: rotate(-45deg) translate(-2px, -8px);
    }
  `
      : ''}
`
