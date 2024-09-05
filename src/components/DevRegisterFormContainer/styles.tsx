import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 637px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1120px) {
    align-items: center;
  }
`

export const TitleText = styled.h1`
  font-size: var(--font-n);
  font-weight: 700;
  color: var(--white);
`

export const SubTitleText = styled.p`
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--gray-100);
`

export const FormContainer = styled.div`
  display: flex;
  background-color: var(--gray-700);
  border-radius: 20px;
  max-height: 100%;
  padding: 0px 38px 30px 38px;
  @media (max-width: 600px) {
    padding: 0 24px 30px 24px;
  }
`
