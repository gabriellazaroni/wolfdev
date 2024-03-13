import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  transition: all 0.2s;
  background-color: var(--dark-900);
`;

export const LoginImageLogo = styled.div`
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
`;

export const LoginContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  @media (max-width: 1480px) {
    max-width: 400px;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    justify-content: start;
  }
  @media (max-width: 490px) {
    margin: 0px 40px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  @media (max-width: 1480px) {
    display: none;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-left: 2rem;
  @media (max-width: 1480px) {
    padding: 0rem;
  }
  @media (max-width: 550px) {
    margin-top: 160px;
  }
  > h1 {
    width: 100%;
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    margin: 0.5rem 0 3rem 0;
    @media (max-width: 1480px) {
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
  > div + div {
    margin: 0.5rem 0;
  }
`;

export const LoginFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--white);
  padding-bottom: 3rem;
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  > div > span {
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: clamp(0.4rem, 0.4rem + 0.6vw, 2rem);
    font-weight: 400;
    margin-left: 0.5rem;
  }
  > a {
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: clamp(0.4rem, 0.4rem + 0.6vw, 2rem);
    font-weight: 400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: var(--purple-500);
    }
  }
`;

export const LoginBackground = styled.img`
  display: block;
`;
