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
  }
`

export const DevDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PhotoContainer = styled.div`
  display: flex;
  gap: 40px;
`

export const ContainerDevName = styled.div`
  display: flex;
  flex-direction: column;
`

export const StarsAndDevNameContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const DevName = styled.h1`
  color: var(--white);
  font-size: var(--font-l);
  font-weight: 700;
`

export const DevLocationContainer = styled.div`
  display: flex;
  gap: 5px;
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

export const LenguagesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  margin-top: 40px;
`

export const DevPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 120px;
  @media(max-width: 1340px) {
    margin-right: 0px;
  }
`

export const PriceText = styled.div`
  color: var(--gray-100);
  font-size: var(--font-n);
`

export const ValueText = styled.p`
  color: var(--white);
  font-size: var(--font-xl);
  font-weight: 700;
`

export const RealizedProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
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

export const NearbyInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export const ButtonFilterDevContainer = styled.div`
  display: flex;
  width: 100%;
`
