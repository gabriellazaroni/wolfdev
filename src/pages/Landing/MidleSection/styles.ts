import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: transparent;
  padding: 0 40px;
  background-color: var(--dark-550);
`

export const Title = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 3rem;
  color: var(--white);
`

export const Subtitle = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--purple-500);
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 2.875rem;
`

export const ContainerTechSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 59.188rem;
  gap: 2rem;
  padding-bottom: 2rem;
`

export const ContainerTechTierSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
  width: 100%;
  max-width: 59.188rem;
  padding-bottom: 3rem;
`
