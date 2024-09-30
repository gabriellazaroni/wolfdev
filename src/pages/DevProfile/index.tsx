import React, { useState } from 'react'
import {
  MainContainer,
  GridContainer,
  IconAndItensMenuContainer,
  IconImg,
  ImgLogo,
  MenuContainer,
  MenuItensContainer,
  SidebarRight,
  TextIconMenu,
  SearchBar,
  SearchContainer,
  IconSearch,
  DevInfoContainer,
  ActivityAndGithubContainer,
  ActivityContainer,
  TitleProjectsGitHub,
  SkillTableContainer,
  TitleBorderRadiusContainer,
  TitleActivtyText,
  MainGitHubContainer,
  GitHubProjectsContainer,
  ActivityInfoText,
  ContentActivityContainer,
  ValueActivityContainer,
  ValueText,
  InfoTitleContainer,
  StyledTable,
  TableRow,
  TableHeader,
  TableCell,
  ProfileSettingsContainer,
  ProfilesTextTitle,
  CirclePhotoContainer,
  PhotoContainer,
  PhotoImg,
  ProfileNameText,
  NameAndEspecilityContainer,
  EspecialityText,
  IconsPofileContainer,
  GraphContainer,
  SubtitleGraphText,
  StarsContainer,
  CountryText,
  CountryContainer,
  JobInfoText,
  SettingsProfileIcon
} from './styles'

import { ContainerBox } from '../../components/ContainerBox'
import { GithubContainerBox } from '../../components/GithubContainerBox'

import logo from '../../assets/images/wolf-dev-logo.svg'
import personIcon from '../../assets/icons/person.svg'
import bellIcon from '../../assets/icons/bell.svg'
import padlockIcon from '../../assets/icons/padlock.svg'
import circleIcon from '../../assets/icons/purple-circle.svg'
import searchIcon from '../../assets/icons/gray-search.svg'
import projectIcon from '../../assets/icons/project.svg'
import habilityIcon from '../../assets/icons/hability.svg'
import settingsIcon from '../../assets/icons/dots-settings.svg'
import outlinedBellIcon from '../../assets/icons/outlined-bell.svg'
import profilePhoto from '../../assets/images/photo.svg'
import graphIcon from '../../assets/icons/graph.svg'
import starsIcon from '../../assets/icons/stars.svg'

export function DevProfile() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <GridContainer>
      <MenuContainer className={menuOpen ? 'active' : ''}>
        <ImgLogo src={logo} />
        <MenuItensContainer>
          <IconAndItensMenuContainer>
            <IconImg src={personIcon} />
            <TextIconMenu>Informações Pessoais</TextIconMenu>
          </IconAndItensMenuContainer>
          <IconAndItensMenuContainer>
            <IconImg src={bellIcon} />
            <TextIconMenu>Notificações</TextIconMenu>
          </IconAndItensMenuContainer>
          <IconAndItensMenuContainer>
            <IconImg src={padlockIcon} />
            <TextIconMenu>Senha</TextIconMenu>
          </IconAndItensMenuContainer>
          <IconAndItensMenuContainer>
            <IconImg src={circleIcon} />
            <TextIconMenu>Conta</TextIconMenu>
          </IconAndItensMenuContainer>
        </MenuItensContainer>
      </MenuContainer>
      <MainContainer>
        <SearchContainer>
          <IconSearch src={searchIcon} />
          <SearchBar placeholder="Procure por projetos aqui" />
        </SearchContainer>
        <DevInfoContainer>
          <ContainerBox icon={projectIcon} value="6" title="Projetos Github" />
          <ContainerBox icon={habilityIcon} value="5" title="Habilidades" />
          <ContainerBox icon={projectIcon} value="15" title="Trabalhos" />
        </DevInfoContainer>
        <ActivityAndGithubContainer>
          <ActivityContainer>
            <TitleBorderRadiusContainer>
              <TitleActivtyText>Atividades</TitleActivtyText>
            </TitleBorderRadiusContainer>
            <ContentActivityContainer>
              {[...Array(3)].map((_, index) => (
                <ValueActivityContainer key={index}>
                  <ActivityInfoText>Projetos realizados</ActivityInfoText>
                  <ValueText>10</ValueText>
                </ValueActivityContainer>
              ))}
            </ContentActivityContainer>
            <InfoTitleContainer>
              <TitleActivtyText>Informações</TitleActivtyText>
            </InfoTitleContainer>
            <ContentActivityContainer>
              <ValueActivityContainer>
                <ActivityInfoText>Projetos realizados</ActivityInfoText>
                <ValueText>10</ValueText>
              </ValueActivityContainer>
            </ContentActivityContainer>
          </ActivityContainer>
          <MainGitHubContainer>
            <TitleProjectsGitHub>Projetos GitHub</TitleProjectsGitHub>
            <GitHubProjectsContainer>
              {[...Array(6)].map((_, index) => (
                <GithubContainerBox
                  projectName="api-rest-node-typescript"
                  key={index}
                />
              ))}
            </GitHubProjectsContainer>
          </MainGitHubContainer>
        </ActivityAndGithubContainer>
        <SkillTableContainer>
          <StyledTable>
            <thead>
              <TableRow>
                <TableHeader>Habilidades</TableHeader>
                <TableHeader>Certificados</TableHeader>
                <TableHeader>Projetos Trabalhados</TableHeader>
                <TableHeader>Anos de Experiência</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>JavaScript</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>10 Projetos</TableCell>
                  <TableCell>3 Anos</TableCell>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </SkillTableContainer>
      </MainContainer>
      <SidebarRight>
        <ProfileSettingsContainer>
          <ProfilesTextTitle>Perfil</ProfilesTextTitle>
          <SettingsProfileIcon src={settingsIcon} onClick={toggleMenu} />
        </ProfileSettingsContainer>
        <PhotoContainer>
          <CirclePhotoContainer>
            <PhotoImg src={profilePhoto} />
          </CirclePhotoContainer>
          <NameAndEspecilityContainer>
            <ProfileNameText>Gabriel</ProfileNameText>
            <EspecialityText>Desenvolvedor Front-end</EspecialityText>
          </NameAndEspecilityContainer>
          <IconsPofileContainer>
            <IconImg src={outlinedBellIcon} />
            <IconImg src={outlinedBellIcon} />
            <IconImg src={outlinedBellIcon} />
          </IconsPofileContainer>
        </PhotoContainer>
        <GraphContainer>
          <IconImg src={graphIcon} />
          <SubtitleGraphText>Habilidades</SubtitleGraphText>
        </GraphContainer>
        <StarsContainer>
          <IconImg src={starsIcon} />
        </StarsContainer>
        <CountryContainer>
          <CountryText>Brasil</CountryText>
          <JobInfoText>Full-time - Freelance</JobInfoText>
        </CountryContainer>
      </SidebarRight>
    </GridContainer>
  )
}
