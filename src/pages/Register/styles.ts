import styled from 'styled-components'
import womanBackground from '../../assets/images/background-woman_code.svg'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.2s;
  background-color: var(--dark-900);
`

export const RegisterImageLogo = styled.img`
  position: absolute;
  display: flex;
  top: 0.5rem;
  left: 4rem;
  @media (max-width: 550px) {
    position: static;
  }
  @media (max-width: 490px) {
    left: 7.5rem;
  }
`

export const RegisterBackground = styled.div`
  width: 100%;
  min-width: 60vw;
  height: 100%;
  background-image: url(${womanBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1280px) {
    display: none;
  }
`

export const RegisterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    justify-content: start;
    padding: 0 24px;
  }
`

export const RegisterContainerForm = styled.div`
  background-color: var(--gray-700);
  padding: 24px 38px 24px 38px;
  border-radius: 20px;
  max-width: 473px;
  width: 100%;
  @media (max-width: 550px) {
    padding: 24px;
    margin-top: 10px;
  }
`

export const RegisterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: 1280px) {
    max-width: 400px;
  }
  > h1 {
    width: 100%;
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: var(--font-xl);
    font-weight: 400;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }

  > h1 > strong {
    font-family: 'Noto Sans', sans-serif;
    font-size: var(--font-xl);
    font-weight: 700;
    color: var(--purple-500);
    text-align: center;
  }
`

export const RegisterTextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1.5rem 0 0 0;
  > span {
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: var(--font-md);
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  > a {
    font-family: 'Noto Sans', sans-serif;
    font-size: var(--font-md);
    font-weight: 700;
    color: var(--purple-500);
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const RegisterFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
  gap: 32px;
  margin-top: 32px;
  @media (max-width: 578px) {
    margin-top: 25px;
  }
`
