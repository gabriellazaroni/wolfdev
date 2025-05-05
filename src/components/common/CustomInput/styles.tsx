import styled from 'styled-components'

interface InputsProps {
  backgroundColor?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`

export const Title = styled.h1`
  color: var(--gray-100);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-sm);
  font-weight: 400;
  line-height: 18px;
`

export const Input = styled.input<InputsProps>`
  width: 100%;
  max-width: 100%;
  height: 58px;
  border-radius: 8px;
  border: 8px solid ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'};
  background: ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'};
  padding: 20px 0px 15px 15px;
  color: var(--gray-100);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-n);
  font-weight: 400;
  line-height: 22px;
  outline: none !important;
  &:-webkit-autofill {
    background: ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'} !important;
    box-shadow: 0 0 0px 1000px
      ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'} inset !important;
    -webkit-box-shadow: 0 0 0px 1000px
      ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'} inset !important;
    -webkit-text-fill-color: var(--gray-100) !important;
    color: var(--gray-100) !important;
    border-radius: 8px !important;
    border: 8px solid ${({ backgroundColor }) => backgroundColor || 'var(--gray-800)'};
  }
  &::placeholder {
    color: var(--gray-500);
  }
`

export const ButtonInputImg = styled.button`
  display: flex;
  border: none;
`

export const Img = styled.img`
  display: block;
  max-width: 20px;
  width: 100%;
  position: absolute;
  right: 20px;
  top: 28px;
  cursor: pointer;
`
