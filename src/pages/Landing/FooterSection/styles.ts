import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  padding: 0 1rem;
  background-color: var(--dark-550);
  > svg {
    cursor: pointer;
  }
  @media (max-width: 560px) {
    flex-direction: column;
  }
`

export const LogoAndSocialMediaContainer = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  @media (max-width: 750px) {
    gap: 30px;
  }
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2rem;
  align-items: center;
`

export const Text = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: clamp(0.2rem, 0.5rem + 0.5vw, 1rem);
  font-weight: 400;
  color: var(--white);
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 750px) {
    gap: 10px;
  }
  @media (max-width: 560px) {
    margin-bottom: 30px;
    margin-left: 20px;
  }
`

export const ImgSocialMediaIcons = styled.img`
  display: block;
  width: 50px;
`

export const WhatsAppLink = styled.a`
  text-decoration: none;
`

export const CircleUpContainer = styled.div`
  @media (max-width: 560px) {
    display: none;
  }
`
