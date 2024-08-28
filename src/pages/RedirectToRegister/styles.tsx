import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  @media (max-width: 1120px) {
    justify-content: center;
    padding: 0 24px;
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 169px;
  margin-top: 89px;
  @media (max-width: 1120px) {
    margin-left: 0px;
    margin-top: 0px;
    padding: 50px 50px 0 50px;
    align-items: center;
  }
  @media (max-width: 520px) {
    padding: 50px 0px 0 0px;
  }
`

export const Title = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: var(--font-xxxxl);
  font-weight: 600;
  color: var(--purple-500);
  width: 100%;
  max-width: 790px;
  @media (max-width: 1120px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    width: 100%;
    max-width: 380px;
  }
`

export const SubTitle = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: var(--font-md);
  font-weight: 400;
  line-height: 38px;
  color: var(--white);
  width: 100%;
  max-width: 574px;
  @media (max-width: 1120px) {
    text-align: center;
  }
  @media (max-width: 850px) {
    line-height: 28px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
  }
`
