import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  padding: 7px;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
    padding: 14px;
  }
`

export const MainContainer = styled.main`
  background-color: var(--gray-700);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 18px 28px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 18px 16px;
  }
`

export const InfoCompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 24px 28px 24px;
  background-color: var(--gray-800);
  border-radius: 20px;
`

export const PhotoAndButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const InfoMainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TitleAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 30px;
`

export const TitleText = styled.h1`
  color: var(--white);
  font-size: var(--font-l);
  font-weight: 700;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const LenguagesContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const EmployersNumberContnainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const IconImg = styled.img`
  width: 25px;
  display: block;
`

export const EmployersNumberText = styled.p`
  color: var(--white);
  font-size: var(--font-md);
  font-weight: 700;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const SocialMediaIcon = styled.img`
  display: block;
  width: 26px;
  cursor: pointer;
`

export const LinkSocialMedia = styled.a``

export const EditInfoButtonContainer = styled.div`
  display: flex;
  align-self: flex-start;
`

export const EditInputsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
`

export const DivisorSelectContainer = styled.div`
  display: flex;
  gap: 37px;
  margin-top: 30px;
`

export const MessageErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TextMesssageError = styled.p`
  font-size: 12px;
  color: var(--red-600);
`

export const FormEditInfoInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const EditLinksInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const TitleLinkText = styled.div`
  color: var(--white);
  font-size: var(--font-md);
  font-weight: 700;
`

export const ButtonSaveAndCancelContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`
