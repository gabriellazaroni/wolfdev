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
`

export const RegisterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  height: 100%;
  @media (max-width: 1280px) {
    max-width: 400px;
  }
  > h1 {
    width: 100%;
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    margin: 0.5rem 0 3rem 0;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }

  > h1 > strong {
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
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
    font-size: clamp(0.4rem, 0.6rem + 0.6vw, 2rem);
    font-weight: 400;

    margin-bottom: 0.5rem;
  }
  > a {
    font-family: 'Noto Sans', sans-serif;
    font-size: clamp(0.4rem, 0.6rem + 0.6vw, 2rem);
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

  padding-bottom: 3rem;

  > div + div {
    margin: 0.5rem 0;
  }
`
