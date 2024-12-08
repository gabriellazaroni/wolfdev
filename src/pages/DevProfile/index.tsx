import React, { useContext, useState } from 'react'
import * as Styled from './styles'
import { ContainerBox } from '../../components/ContainerBox'
import { GithubContainerBox } from '../../components/GithubContainerBox'
import { MenuContainer } from '../../components/MenuComponents/MenuContainer'
import { DevProfilePhoto } from '../../components/DevProfilePhoto'
import projectIcon from '../../assets/icons/project.svg'
import habilityIcon from '../../assets/icons/hability.svg'
import settingsIcon from '../../assets/icons/dots-settings.svg'
import outlinedBellIcon from '../../assets/icons/outlined-bell.svg'
import graphIcon from '../../assets/icons/graph.svg'
import starsIcon from '../../assets/icons/stars.svg'
import { MenuHamburgerModal } from '../../components/MenuHamburgerModal'
import { MenuHamburgerContainer } from '../FeedHirer/styles'
import { PersonalInfoForm } from '../../components/MenuComponents/PersonalInfoForm'
import { NotificationForm } from '../../components/MenuComponents/NotificationsForm'
import { PasswordForm } from '../../components/MenuComponents/PasswordForm'
import { AccountForm } from '../../components/MenuComponents/AccountForm'

export function DevProfile() {
  const [isMenuHamburgerModalOpen, setIsMenuHamburgerModalOpen] = useState(false)

  function handleCloseMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(false)
  }

  function handleOpenMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(true)
  }

  return (
    <Styled.GridContainer>
      <MenuContainer maxWidth='350px' />
      <Styled.MainContainer>
        <Styled.DevInfoContainer>
          <ContainerBox icon={projectIcon} value="6" title="Projetos Github" />
          <ContainerBox icon={habilityIcon} value="5" title="Habilidades" />
          <ContainerBox icon={projectIcon} value="15" title="Trabalhos" />
        </Styled.DevInfoContainer>
        <Styled.ActivityAndGithubContainer>
          <Styled.ActivityContainer>
            <Styled.TitleBorderRadiusContainer>
              <Styled.TitleActivtyText>Atividades</Styled.TitleActivtyText>
            </Styled.TitleBorderRadiusContainer>
            <Styled.ContentActivityContainer>
              {[...Array(3)].map((_, index) => (
                <Styled.ValueActivityContainer key={index}>
                  <Styled.ActivityInfoText>Projetos realizados</Styled.ActivityInfoText>
                  <Styled.ValueText>10</Styled.ValueText>
                </Styled.ValueActivityContainer>
              ))}
            </Styled.ContentActivityContainer>
            <Styled.InfoTitleContainer>
              <Styled.TitleActivtyText>Informações</Styled.TitleActivtyText>
            </Styled.InfoTitleContainer>
            <Styled.ContentActivityContainer>
              <Styled.ValueActivityContainer>
                <Styled.ActivityInfoText>Projetos realizados</Styled.ActivityInfoText>
                <Styled.ValueText>10</Styled.ValueText>
              </Styled.ValueActivityContainer>
            </Styled.ContentActivityContainer>
          </Styled.ActivityContainer>
          <Styled.MainGitHubContainer>
            <Styled.TitleProjectsGitHub>Projetos GitHub</Styled.TitleProjectsGitHub>
            <Styled.GitHubProjectsContainer>
              {[...Array(6)].map((_, index) => (
                <GithubContainerBox projectName="api-rest-node-typescript" key={index} />
              ))}
            </Styled.GitHubProjectsContainer>
          </Styled.MainGitHubContainer>
        </Styled.ActivityAndGithubContainer>
        <Styled.SkillTableContainer>
          <Styled.StyledTable>
            <thead>
              <Styled.TableRow>
                <Styled.TableHeader>Habilidades</Styled.TableHeader>
                <Styled.TableHeader>Certificados</Styled.TableHeader>
                <Styled.TableHeader>Projetos Trabalhados</Styled.TableHeader>
                <Styled.TableHeader>Anos de Experiência</Styled.TableHeader>
              </Styled.TableRow>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <Styled.TableRow key={index}>
                  <Styled.TableCell>JavaScript</Styled.TableCell>
                  <Styled.TableCell>-</Styled.TableCell>
                  <Styled.TableCell>10 Projetos</Styled.TableCell>
                  <Styled.TableCell>3 Anos</Styled.TableCell>
                </Styled.TableRow>
              ))}
            </tbody>
          </Styled.StyledTable>
        </Styled.SkillTableContainer>
      </Styled.MainContainer>
      <Styled.SidebarRight>
        <Styled.ProfileSettingsContainer>
          <Styled.ProfilesTextTitle>Perfil</Styled.ProfilesTextTitle>
          <Styled.SettingsProfileIcon src={settingsIcon} onClick={handleOpenMenuHamburgerModal} />
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
        </Styled.ProfileSettingsContainer>
        <Styled.PhotoContainer>
          <DevProfilePhoto />
          <Styled.NameAndEspecilityContainer>
            <Styled.ProfileNameText>Gabriel</Styled.ProfileNameText>
            <Styled.EspecialityText>Desenvolvedor Front-end</Styled.EspecialityText>
          </Styled.NameAndEspecilityContainer>
          <Styled.IconsPofileContainer>
            <Styled.IconImg src={outlinedBellIcon} />
            <Styled.IconImg src={outlinedBellIcon} />
            <Styled.IconImg src={outlinedBellIcon} />
          </Styled.IconsPofileContainer>
        </Styled.PhotoContainer>
        <Styled.GraphContainer>
          <Styled.IconImg src={graphIcon} />
          <Styled.SubtitleGraphText>Habilidades</Styled.SubtitleGraphText>
        </Styled.GraphContainer>
        <Styled.StarsContainer>
          <Styled.IconImg src={starsIcon} />
        </Styled.StarsContainer>
        <Styled.CountryContainer>
          <Styled.CountryText>Brasil</Styled.CountryText>
          <Styled.JobInfoText>Full-time - Freelance</Styled.JobInfoText>
        </Styled.CountryContainer>
      </Styled.SidebarRight>
    </Styled.GridContainer>
  )
}
