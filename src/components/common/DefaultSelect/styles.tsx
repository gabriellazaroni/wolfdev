/* eslint-disable prettier/prettier */
import styled from 'styled-components'

interface DefaultInputStyleProps {
  size?: string
  errors?: boolean
  colored?: boolean
}

export const DefaultInputContainerText = styled.label<DefaultInputStyleProps>`
  font-size: clamp(1rem, 0.4rem + 0.6vw, 2rem);
  color: ${props => (props.errors ? 'var(--red-600)' : 'var(--dark-300)')};
`

export const DefaultInputContainer = styled.div<DefaultInputStyleProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${props => (props.size ? props.size : '100%')};
  overflow: auto;
  margin-top: 0.5rem;
  border: 1px solid
    ${props =>
    !props.errors
      ? props.colored
        ? 'var(--purple-500)'
        : 'var(--gray-800)'
      : 'var(--red-600)'};
  border-radius: 0.5rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const DefaultInputTitleBox = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > strong {
    font-size: clamp(0.75rem, 0.4rem + 0.6vw, 2rem);
    color: var(--red-600);
    margin-left: 0.5rem;
  }
`

export const DefaultInputContainerInput = styled.select<DefaultInputStyleProps>`
  width: 95%;
  height: 3rem;
  background-color: var(--gray-800);
  color: var(--dark-400);
  font-size: clamp(1rem, 0.7rem + 0.3vw, 4rem);
  padding: 0 1.4rem;
  border: 0;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  ::-webkit-datetime-edit-text {
    padding: 0 0.3rem;
  }
  @media (max-width: 1280px) {
    padding: 0 1rem;
  }
`

export const DefaultInputIconDiv = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-800);
  cursor: pointer;
  padding: 0 1rem;
  > svg {
    width: 2vw;
    @media (min-width: 1920px) {
      width: 2rem;
    }
  }

  @media (max-width: 1920px) {
    height: 2.5rem;
  }
`
