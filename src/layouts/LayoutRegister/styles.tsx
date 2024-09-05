import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 60px;
  @media (max-width: 720px) {
    padding: 0 24px 0 24px;
    margin-top: 32px;
  }
`
