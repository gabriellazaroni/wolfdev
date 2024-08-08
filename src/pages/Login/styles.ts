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
  max-width: 890px;
  @media (max-width: 1480px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    justify-content: start;
  }
  @media (max-width: 540px) {
    margin: 0px 24px;
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
  max-width: 473px;
  margin-left: 4rem;
  background-color: var(--gray-700);
  border-radius: 20px;
  padding: 24px 38px 24px 38px;
  @media (max-width: 550px) {
    margin-top: 40px;
  }
  @media (max-width: 540px) {
    margin-top: 40px;
    padding: 24px 24px 24px 24px;
  }
  @media (max-width: 1480px) {
    margin-left: 0px;
  }
  > h1 {
    width: 100%;
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    @media (max-width: 1480px) {
      text-align: center;
      font-size: 1.5rem;
    }
    margin-bottom: 30px;
  }

  > h1 > strong {
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;

    color: var(--purple-500);

    text-align: center;
    @media (max-width: 1480px) {
      font-size: 1.5rem;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 1rem;
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
    font-size: clamp(0.75rem, 0.4rem + 0.6vw, 2rem);
    font-weight: 400;
    margin-left: 0.5rem;
  }
  > a {
    color: var(--white);
    font-family: 'Noto Sans', sans-serif;
    font-size: clamp(0.75rem, 0.4rem + 0.6vw, 2rem);
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

export const HaveAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 24px;
  align-items: center;
`;

export const HaveAccountTitle = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
`;

export const RegisterText = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: var(--purple-500);
  font-weight: 700;
`;
