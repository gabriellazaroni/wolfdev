import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  padding: 7px;
  width: 100%;
  max-width: 1920px;
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

export const SettingsIconContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const SettingsProfileIcon = styled.img`
  display: none;
  cursor: pointer;
  margin-left: 20px;
  width: 7px;
  @media (max-width: 1340px) {
    display: block;
  }
`

export const DevContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  background-color: var(--gray-800);
  border-radius: 12px;
  padding: 40px;
  gap: 120px;
  justify-content: space-between;
  @media(max-width: 970px) {
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
`

export const DevDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PhotoContainer = styled.div`
  display: flex;
  gap: 40px;
  @media(max-width: 970px) {
    justify-content: center;
  }
  @media(max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerDevName = styled.div`
  display: flex;
  flex-direction: column;
`

export const StarsAndDevNameContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  flex-direction: column;
  @media(max-width: 640px) {
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
  }
`

export const DevName = styled.h1`
  color: var(--white);
  font-size: var(--font-l);
  font-weight: 700;
  @media(max-width: 640px) {
    font-size: 20px;
  }
`

export const LenguagesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media(max-width: 970px) {
    margin-top: 30px;
    justify-content: center;
  }
  @media(max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const DevLocationContainer = styled.div`
  display: flex;
  gap: 5px;
  @media(max-width: 640px) {
    align-items: center;
  }
`

export const DevLocationText = styled.p`
  color: var(--gray-100);
  font-size: var(--font-sm);
  font-weight: 400;
`

export const DevInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  @media(max-width: 640px) {
    align-items: center;
  }
`

export const DevInfoText = styled.p`
  color: var(--white);
  font-size: var(--font-n);
  font-weight: 400;
`

export const IconImg = styled.img`
  display: block;
  width: 100px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  margin-top: 40px;
  @media(max-width: 970px) {
    max-width: 380px;
    text-align: center;
    margin-top: 30px;
  }
`

export const DevPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 120px;
  @media(max-width: 1460px) {
    margin-right: 0px;
  }
  @media(max-width: 970px) {
    align-items: center;
    gap: 5px;
  }
`

export const PriceText = styled.h1`
  color: var(--gray-100);
  font-size: var(--font-n);
`

export const ValueText = styled.p`
  color: var(--white);
  font-size: var(--font-xl);
  font-weight: 700;
`

export const HireButtonContainer = styled.div`
  display: flex;
  @media(max-width: 970px) {
    margin-top: 5px;
  }
`

export const ModalHireContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 540px) {
    flex-direction: column;
  }
`

export const ModalPhotoContainer = styled.div`
  display: flex;
  gap: 20px;
  @media(max-width: 840px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export const ModalContainerDevName = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalStarsAndDevNameContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  flex-direction: column;
  @media(max-width: 840px) {
    align-items: center;
    margin-bottom: 0px;
  }
`

export const ModalDevInfoText = styled.p`
  color: var(--white);
  font-size: var(--font-n);
  font-weight: 400;
`

export const ModalDevPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(max-width: 840px) {
    align-items: center;
    gap: 5px;
  }
  @media(max-width: 540px) {
    margin-top: 40px;
  }
`

export const InputsAndButtonHireContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 80px;
  @media(max-width: 840px) {
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;
  }
`

export const ModalInputsHireContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 372px;
  width: 100%;
  @media(max-width: 840px) {
    max-width: none;
  }
`

export const ModalInputsTitleHire = styled.div`
  color: var(--white);
  font-size: var(--font-n);
  font-weight: 400;
`

export const ModalButtonsHireContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: end;
  width: 100%;
  max-width: 240px;
  margin-bottom: 10px;
  @media(max-width: 840px) {
    max-width: none;
  }
`

export const ModalRealizedProjectsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

export const RealizedProjectsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

export const RealizedProjectContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const RealizedProjectText = styled.p`
  color: var(--gray-100);
  font-size: var(--font-n);
`

export const ProjectsRealizedNumber = styled.p`
  color: var(--white);
  font-size: var(font-n);
  display: inline;
  font-weight: 700;
`

export const FilterContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 15px;
`

export const TitleModalFilterDev = styled.h1`
  font-size: var(--font-l);
  color: var(--white);
  font-weight: 700;
  margin-bottom: 30px;
`

export const MenuHamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
