import styled from 'styled-components'

export const FormInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
`

export const IconImg = styled.img`
  display: block;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 780px) {
    flex-direction: column;
  }
`

export const WarningMesssageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media(max-width: 780px) {
    align-items: center;
    margin-bottom: 30px;
    gap: 8px;
  }
`

export const TitleWarining = styled.h1`
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--gray-100);
`

export const MessageWarningText = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
  color: var(--gray-100);
  width: 100%;
  max-width: 180px;
  @media(max-width: 780px) {
    max-width: none;
    text-align: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const ToggleOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const TitleToggleOptions = styled.div`
   font-size: var(--font-md);
  font-weight: 700;
  color: var(--white);
`

export const OptionAndToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const PlataformContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const OptionText = styled.p`
   font-size: var(--font-sm);
  font-weight: 400;
  color: var(--gray-100);
`

export const ToggleSwitch = styled.div<{ active: boolean }>`
  width: 60px;
  height: 30px;
  background-color: ${({ active }) => (active ? 'var(--purple-500)' : 'var(--purple-100)')};
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media(max-width: 780px) {
    max-width: 60px;
    width: 100%;
  }
`

export const ToggleCircle = styled.div<{ active: boolean }>`
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? 'translateX(30px)' : 'translateX(0)')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  @media(max-width: 780px) {
    max-width: 22px;
    width: 100%;
  }
`
