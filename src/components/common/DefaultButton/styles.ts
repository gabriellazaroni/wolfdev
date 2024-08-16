/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'react-router-dom'

interface ButtonProps {
  active: boolean
  fullsize: boolean
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => (props.fullsize ? 'width: 100%;' : '')}
  height: 3.125rem;
  color: var(--white);
  background-color: Transparent;
  border: 1px solid var(--white);
  border-radius: 8px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0 3rem;
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--white);
    color: var(--dark-900);
  }
  ${props =>
    props.active &&
    `
    background-color: var(--white);
    color: var(--dark-900);
    &:hover {
      background-color: ${lighten(0.9, '#020202')};
      color: var(--dark-900);
    }
  `}
`

export const ButtonLink = styled<any>(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  color: var(--white);
  background-color: Transparent;
  border: 1px solid var(--white);
  border-radius: 8px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0 3rem;
  cursor: pointer;
  &:hover {
    background-color: var(--white);
    color: var(--dark-900);
  }
  ${props =>
    props.active &&
    `
    background-color: var(--white);
    color: var(--dark-900);
    &:hover {
      background-color: ${lighten(0.9, '#020202')};
      color: var(--dark-900);
    }
  `}
`
