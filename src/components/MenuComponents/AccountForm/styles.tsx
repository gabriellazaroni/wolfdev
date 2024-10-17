import styled from 'styled-components'

export const FormInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-top: 24px;
`

export const TitleAndMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const TitleText = styled.h1`
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--gray-100);
`

export const MessageContainer = styled.div`
  display: flex;
`

export const DetailMessgaeContainer = styled.label`
  height: 160px;
  width: 20px;
  background-color: #352043;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const ContainerMessageText = styled.div`
  display: flex;
  height: 160px;
  width: 100%;
  flex-direction: column;
  background-color: var(--gray-800);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  gap: 12px;
`

export const OptionSelect = styled.option``

export const TitleMessage = styled.div`
  font-size: var(--font-sm);
  color: var(--gray-100);
  font-weight: 400;
`

export const SubTitleMessage = styled.p`
  font-size: var(--font-sm);
  color: var(--white);
  font-weight: 400;
`

export const IconImg = styled.img`
  display: block;
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
