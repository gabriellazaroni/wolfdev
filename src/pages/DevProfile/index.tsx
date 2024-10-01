import React, { useState } from 'react'
import * as Styled from './styles'
import { ContainerBox } from '../../components/ContainerBox'
import { GithubContainerBox } from '../../components/GithubContainerBox'
import { MenuItemButtton } from '../../components/MenuItemButton'
import DefaultButton from '../../components/common/DefaultButton'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfoEditSchema } from '../../schemas/PersonalInfoEditSchema'
import { z } from 'zod'
import { CustomInput } from '../../components/common/CustomInput'

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

export type PersonalInfoEditInputsProps = z.infer<typeof PersonalInfoEditSchema>;

export function DevProfile() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modals, setModals] = useState({
    personalInfo: false,
    notifications: false,
    password: false,
    account: false
  })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleToggleModal = (modalName: keyof typeof modals) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }))
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PersonalInfoEditInputsProps>({
    resolver: zodResolver(PersonalInfoEditSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      name: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      country: '',
      birth: ''
    }
  })

  const handleFormSubmit = (data: PersonalInfoEditInputsProps, modalName: keyof typeof modals) => {
    console.log(data)
    setModals((prevState) => ({
      ...prevState,
      [modalName]: false
    }))
    reset()
  }

  return (
    <Styled.GridContainer>
      <Styled.MenuContainer className={menuOpen ? 'active' : ''}>
        <Styled.ImgLogo src={logo} />
        <Styled.MenuItensContainer>
          <MenuItemButtton
            isShowing={modals.personalInfo}
            onRequestClose={() => handleToggleModal('personalInfo')}
            title="Informações Pessoais"
            icon={personIcon}
            toggleModal={() => handleToggleModal('personalInfo')}
          >
            <Styled.FormInputsContainer onSubmit={handleSubmit((data) => handleFormSubmit(data, 'personalInfo'))}>
              <Styled.DivisorSelectContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="Eu sou" placeHolder="Nome" {...register('name')} />
                  {errors.name?.message && <Styled.TextMesssageError>{errors.name?.message}</Styled.TextMesssageError>}
                </Styled.MessageErrorContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="Sobrenome" placeHolder="Sobrenome" {...register('lastName')} />
                  {errors.lastName?.message && (
                    <Styled.TextMesssageError>{errors.lastName?.message}</Styled.TextMesssageError>
                  )}
                </Styled.MessageErrorContainer>
              </Styled.DivisorSelectContainer>
              <Styled.DivisorSelectContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="Telefone" placeHolder="Telefone" {...register('phoneNumber')} />
                  {errors.phoneNumber?.message && (
                    <Styled.TextMesssageError>{errors.phoneNumber?.message}</Styled.TextMesssageError>
                  )}
                </Styled.MessageErrorContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="Email" placeHolder="Email" {...register('email')} />
                  {errors.email?.message && <Styled.TextMesssageError>{errors.email?.message}</Styled.TextMesssageError>}
                </Styled.MessageErrorContainer>
              </Styled.DivisorSelectContainer>
              <Styled.DivisorSelectContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="País" placeHolder="País" {...register('country')} />
                  {errors.country?.message && <Styled.TextMesssageError>{errors.country?.message}</Styled.TextMesssageError>}
                </Styled.MessageErrorContainer>
                <Styled.MessageErrorContainer>
                  <CustomInput titleInput="Nascimento" placeHolder="Nascimento" {...register('birth')} />
                  {errors.birth?.message && <Styled.TextMesssageError>{errors.birth?.message}</Styled.TextMesssageError>}
                </Styled.MessageErrorContainer>
              </Styled.DivisorSelectContainer>
              <Styled.ButtonContainer>
                <DefaultButton
                  active
                  backgroundColor="var(--purple-500)"
                  color="var(--white)"
                  border="var(--purple-500)"
                  type="submit"
                >
                  AVANÇAR
                </DefaultButton>
              </Styled.ButtonContainer>
            </Styled.FormInputsContainer>
          </MenuItemButtton>

          <MenuItemButtton
            isShowing={modals.notifications}
            onRequestClose={() => handleToggleModal('notifications')}
            title="Notificações"
            icon={bellIcon}
            toggleModal={() => handleToggleModal('notifications')}
          >
            <h1>gabriel</h1>
          </MenuItemButtton>

          <MenuItemButtton
            isShowing={modals.password}
            onRequestClose={() => handleToggleModal('password')}
            title="Senha"
            icon={padlockIcon}
            toggleModal={() => handleToggleModal('password')}
          >
            <h1>gabriel</h1>
          </MenuItemButtton>

          <MenuItemButtton
            isShowing={modals.account}
            onRequestClose={() => handleToggleModal('account')}
            title="Conta"
            icon={circleIcon}
            toggleModal={() => handleToggleModal('account')}
          >
            <h1>gabriel</h1>
          </MenuItemButtton>
        </Styled.MenuItensContainer>
      </Styled.MenuContainer>
      <Styled.MainContainer>
        <Styled.SearchContainer>
          <Styled.IconSearch src={searchIcon} />
          <Styled.SearchBar placeholder="Procure por projetos aqui" />
        </Styled.SearchContainer>
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
          <Styled.SettingsProfileIcon src={settingsIcon} onClick={toggleMenu} />
        </Styled.ProfileSettingsContainer>
        <Styled.PhotoContainer>
          <Styled.CirclePhotoContainer>
            <Styled.PhotoImg src={profilePhoto} />
          </Styled.CirclePhotoContainer>
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
