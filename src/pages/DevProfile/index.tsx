import React, { useContext, useState } from 'react'
import { ContainerBox } from '../../components/ContainerBox'
import { GithubContainerBox } from '../../components/GithubContainerBox'
import { MenuContainer } from '../../components/MenuComponents/MenuContainer'
import { ProfilePhoto } from '../../components/ProfilePhoto'
import projectIcon from '../../assets/icons/project.svg'
import habilityIcon from '../../assets/icons/hability.svg'
import settingsIcon from '../../assets/icons/dots-settings.svg'
import outlinedBellIcon from '../../assets/icons/outlined-bell.svg'
import graphIcon from '../../assets/icons/graph.svg'
import starsIcon from '../../assets/icons/stars.svg'
import profilePhoto from '../../assets/images/photo.svg'
import { MenuHamburgerModal } from '../../components/MenuHamburgerModal'
import { MenuHamburgerContainer } from '../FeedHirer/styles'
import { PersonalInfoForm } from '../../components/MenuComponents/PersonalInfoForm'
import { NotificationForm } from '../../components/MenuComponents/NotificationsForm'
import { PasswordForm } from '../../components/MenuComponents/PasswordForm'
import { AccountForm } from '../../components/MenuComponents/AccountForm'
import { ActivityAndGithubContainer, ActivityContainer, ActivityInfoText, ContentActivityContainer, CountryContainer, CountryText, DevInfoContainer, EspecialityText, GitHubProjectsContainer, GraphContainer, GridContainer, IconImg, IconsPofileContainer, InfoTitleContainer, JobInfoText, MainContainer, MainGitHubContainer, NameAndEspecilityContainer, PhotoContainer, ProfileNameText, ProfileSettingsContainer, ProfilesTextTitle, SettingsProfileIcon, SidebarRight, SkillTableContainer, StarsContainer, StyledTable, SubtitleGraphText, TableCell, TableHeader, TableRow, TitleActivtyText, TitleBorderRadiusContainer, TitleProjectsGitHub, ValueActivityContainer, ValueText } from './styles'

export function DevProfile() {
  const [isMenuHamburgerModalOpen, setIsMenuHamburgerModalOpen] = useState(false)

  function handleCloseMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(false)
  }

  function handleOpenMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(true)
  }

  return (
    <GridContainer>
      <MenuContainer maxWidth='350px' />
      <MainContainer>
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
                <GithubContainerBox projectName="api-rest-node-typescript" key={index} />
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
          <SettingsProfileIcon src={settingsIcon} onClick={handleOpenMenuHamburgerModal} />
          <MenuHamburgerModal
            isShowing={isMenuHamburgerModalOpen}
            onRequestClose={handleCloseMenuHamburgerModal}
          >
            <MenuHamburgerContainer>
              <PersonalInfoForm />
              <NotificationForm />
              <PasswordForm />
              <AccountForm />
            </MenuHamburgerContainer>
          </MenuHamburgerModal>
        </ProfileSettingsContainer>
        <PhotoContainer>
          <ProfilePhoto photo={profilePhoto} />
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
