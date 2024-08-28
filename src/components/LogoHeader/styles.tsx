import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  margin-left: 64px;
  @media (max-width: 1120px) {
    justify-content: center;
    margin-left: 0px;
  }
`

export const LogoImg = styled.img`
  display: block;
  cursor: pointer;
  margin-top: 16px;
`
