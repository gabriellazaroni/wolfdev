import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  height: 100vh;
  padding: 7px;
  width: 100%;
  max-width: 1920px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
    padding: 14px;
  }
`

export const MenuContainer = styled.div`
  background-color: var(--gray-700);
  border-radius: 20px;
  z-index: 101;
  max-width: 350px;
  width: 100%;
  @media (max-width: 1200px) {
    position: fixed;
    top: 60px;
    right: 32px;
    height: 240px;
    width: 250px;
    transform: translateX(calc(100% + 32px));
    background-color: var(--gray-800);
  }

  &.active {
    transform: translateX(0);
  }
`

export const ImgLogo = styled.img`
  display: block;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const MenuItensContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 24px;
  margin-top: 30px;
`

export const IconAndItensMenuContainer = styled.h1`
  display: flex;
  gap: 10px;
`

export const IconImg = styled.img`
  display: block;
`

export const TextIconMenu = styled.a`
  font-size: var(--font-n);
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
`

export const MainContainer = styled.main`
  background-color: var(--gray-700);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 18px 28px;
  width: 100%;
  @media (max-width: 1200px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  @media (max-width: 700px) {
    padding: 18px 16px;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`

export const IconSearch = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`

export const SearchBar = styled.input`
  width: 100%;
  height: 56px;
  background-color: var(--gray-800);
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  color: var(--gray-100);
  font-size: var(--font-sm);
  padding: 0 42px;
  &::placeholder {
    color: var(--gray-500);
  }
`

export const DevInfoContainer = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-top: 26px;
  }
`

export const ActivityAndGithubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-top: 30px;
  gap: 17px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  background-color: var(--gray-800);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`

export const TitleBorderRadiusContainer = styled.div`
  display: flex;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgba(191, 89, 253, 0.2);
  padding: 12px 15px;
  align-items: center;
`

export const TitleActivtyText = styled.h1`
  font-size: var(--font-n);
  font-weight: 700;
  color: var(--gray-100);
`

export const ContentActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 36px 0px 26px;
`

export const ActivityInfoText = styled.h1`
  font-size: var(--font-n);
  font-weight: 400;
  color: var(--gray-100);
`

export const ValueActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueText = styled.p`
  font-size: var(--font-n);
  font-weight: 400;
  color: var(--gray-100);
`

export const InfoTitleContainer = styled.div`
  display: flex;
  background-color: rgba(191, 89, 253, 0.2);
  padding: 12px 15px;
  align-items: center;
  margin-top: 26px;
`

export const MainGitHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
`

export const TitleProjectsGitHub = styled.h1`
  font-size: var(--font-n);
  font-weight: 700;
  color: var(--gray-100);
  @media (max-width: 700px) {
    margin-top: 8px;
  }
`

export const GitHubProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 17px;
  align-items: end;
`

export const SkillTableContainer = styled.div`
  width: 100%;
  max-height: 210px;
  border-radius: 12px;
  border-top-right-radius: 0px;
  background-color: var(--gray-800);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  margin-top: 30px;
  overflow-y: auto;
  @media (max-height: 929px) {
    max-height: 190px;
  }
  @media (max-width: 700px) {
    max-height: 100%;
    border-top-right-radius: 12px;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  table-layout: fixed;
`

export const TableHeader = styled.th`
  background-color: #352043;
  color: var(--gray-100);
  font-weight: 700;
  font-size: var(--font-n);
  padding: 12px 15px;
  text-align: left;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (max-width: 700px) {
    font-size: 12px;
  }

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    @media (max-width: 700px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 700px) {
      text-align: right;
    }
  }
`

export const TableRow = styled.tr``

export const TableCell = styled.td`
  color: var(--gray-100);
  font-size: var(--font-sm);
  padding: 7px 15px;
  text-align: left;
  &:nth-child(2),
  &:nth-child(3) {
    @media (max-width: 700px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 700px) {
      /* font-size: 12px; */
      text-align: right;
    }
  }
`

export const SidebarRight = styled.div`
  display: flex;
  background-color: var(--gray-700);
  border-radius: 20px;
  padding: 18px 28px;
  width: 100%;
  max-width: 350px;
  flex-direction: column;

  @media (max-width: 1200px) {
    order: -1; /* Coloca o SidebarRight no topo */
    max-width: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  @media (max-width: 700px) {
    padding: 18px 16px;
  }
`

export const ProfileSettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: end;
  }
`

export const SettingsProfileIcon = styled.img`
  display: none;
  cursor: pointer;
  width: 7px;
  @media (max-width: 1200px) {
    display: block;
  }
`

export const ProfilesTextTitle = styled.h1`
  font-size: var(--font-n);
  font-weight: 700px;
  color: var(--gray-100);
  @media (max-width: 1200px) {
    display: none;
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  align-items: center;
  gap: 18px;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`

export const CirclePhotoContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 8px;
  background: conic-gradient(
    var(--purple-500) 0deg 120deg,
    var(--gray-600) 120deg 240deg
  );
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background-color: var(--gray-700);
    border-radius: 50%;
  }
`

export const PhotoImg = styled.img`
  position: relative;
  border-radius: 50%;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  object-fit: cover;
  z-index: 1;
`

export const NameAndEspecilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const ProfileNameText = styled.h1`
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--gray-100);
`

export const EspecialityText = styled.p`
  font-size: var(--font-n);
  font-weight: 400;
  color: var(--gray-200);
`

export const IconsPofileContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 56px;
  @media (max-width: 700px) {
    margin-top: 26px;
  }
`

export const SubtitleGraphText = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
  color: var(--gray-200);
`

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
  @media (max-width: 700px) {
    margin-top: 36px;
  }
`
export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 56px;
  @media (max-width: 700px) {
    margin-top: 36px;
    gap: 10px;
  }
`

export const CountryText = styled.p`
  font-size: var(--font-md);
  font-weight: 400;
  color: var(--gray-100);
`

export const JobInfoText = styled.p`
  font-size: var(--font-md);
  font-weight: 400;
  color: var(--gray-100);
`