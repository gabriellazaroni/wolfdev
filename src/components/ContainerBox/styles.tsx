import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: var(--gray-800);
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

export const IconImg = styled.img`
  display: block;
  width: 45px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const TitleAndValueText = styled.p`
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--white);
  width: 110px;
`
