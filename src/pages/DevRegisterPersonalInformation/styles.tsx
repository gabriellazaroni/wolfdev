import styled from 'styled-components'

export const FormInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 561px;
  margin-top: 24px;
`

export const DivisorSelectContainer = styled.div`
  display: flex;
  gap: 37px;
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
