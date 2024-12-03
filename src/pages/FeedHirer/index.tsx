import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  ContainerDevName,
  DescriptionContainer,
  DevContainer,
  DevDetailsContainer,
  DevInfoText,
  DevName,
  DevPriceContainer,
  FilterContainerForm,
  GridContainer,
  IconImg,
  LenguagesContainer,
  MainContainer,
  PhotoContainer,
  PriceText,
  ProjectsRealizedNumber,
  RealizedProjectsContainer,
  RealizedProjectText,
  SettingsIconContainer,
  SettingsProfileIcon,
  ValueText,
  DevInfoContainer,
  DevLocationContainer,
  DevLocationText,
  StarsAndDevNameContainer,
  HireButtonContainer,
  ModalHireContainer,
  ModalDevPriceContainer,
  ModalInputsHireContainer,
  ModalInputsTitleHire,
  InputsAndButtonHireContainerForm,
  ModalButtonsHireContainer,
  ModalPhotoContainer,
  ModalContainerDevName,
  ModalStarsAndDevNameContainer,
  ModalDevInfoText,
  ModalRealizedProjectsContainer,
  MenuHamburgerContainer
} from './styles'
import { MenuContainer } from '../../components/MenuComponents/MenuContainer'
import { SearchBar } from '../../components/SearchBar'
import { DevProfilePhoto } from '../../components/DevProfilePhoto'
import { LenguageBox } from '../../components/LenguageBox'
import { CollapsibleText } from '../../components/Collapsibletext'
import { CustomModal } from '../../components/CustomModal'
import { FilterDevForm } from '../../components/FilterDevForm'
import { CustomInput } from '../../components/common/CustomInput'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import { HireModalAboutProjectSchema } from '../../schemas/HireModalAboutProjectSchema'
import { MenuHamburgerModal } from '../../components/MenuHamburgerModal'
import { PersonalInfoForm } from '../../components/MenuComponents/PersonalInfoForm'
import { NotificationForm } from '../../components/MenuComponents/NotificationsForm'
import { PasswordForm } from '../../components/MenuComponents/PasswordForm'
import { AccountForm } from '../../components/MenuComponents/AccountForm'
import { TextMesssageError } from '../DevRegisterPersonalInformation/styles'
import DefaultButton from '../../components/common/DefaultButton'
import settingsIcon from '../../assets/icons/dots-settings.svg'
import filterIcon from '../../assets/icons/filter.svg'
import hireIcon from '../../assets/icons/hire.svg'
import starsIcon from '../../assets/icons/stars.svg'

export type AboutProjectsProps = z.infer<
  typeof HireModalAboutProjectSchema
>

type Developer = {
  name: string;
  job: string;
  skills: string[];
  professional: string;
  seniority: string;
  locationCity: string;
  locationState: string;
  pricePerHour: string;
};

const defaultDev: Developer = {
  name: '',
  job: '',
  skills: [],
  professional: '',
  seniority: '',
  locationCity: '',
  locationState: '',
  pricePerHour: ''
}

export function FeedHirer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isMenuHamburgerModalOpen, setIsMenuHamburgerModalOpen] = useState(false)
  const [filteredDevelopers, setFilteredDevelopers] = useState([])
  const [currentDev, setCurrentDev] = useState<Developer | null>(defaultDev)
  const [searchQuery, setSearchQuery] = useState('')

  function handleCloseModal() {
    setIsOpen(false)
  }

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleClosePaymentModal() {
    setIsPaymentModalOpen(false)
  }

  function handleOpenPaymentModal(dev: Developer) {
    setCurrentDev(dev)
    setIsPaymentModalOpen(true)
  }

  function handleCloseMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(false)
  }

  function handleOpenMenuHamburgerModal() {
    setIsMenuHamburgerModalOpen(true)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AboutProjectsProps>({
    resolver: zodResolver(HireModalAboutProjectSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      category: '',
      subCategory: '',
      projectName: '',
      coments: ''
    }
  })

  const handleFormSubmit = (data: AboutProjectsProps) => {
    console.log(data)
  }

  const developers = [
    {
      name: 'Gabriel Augusto',
      job: 'Back-end Developer',
      skills: ['Python', 'React', 'HTML', 'CSS'],
      professional: 'Full-time',
      seniority: 'Senior',
      locationCity: 'Belo Horizonte',
      locationState: 'Minas Gerais',
      pricePerHour: '250'
    },
    {
      name: 'Maria Silva',
      job: 'Front-end Developer',
      skills: ['JavaScript', 'React', 'HTML', 'CSS'],
      professional: 'Full-time',
      seniority: 'Pleno',
      locationCity: 'São Paulo',
      locationState: 'São Paulo',
      pricePerHour: '100'
    },
    {
      name: 'Rodolfo Silva',
      job: 'Designer',
      skills: ['JavaScript', 'React', 'HTML', 'CSS'],
      professional: 'Freelancer',
      seniority: 'Junior',
      locationCity: 'Rio de Janeiro',
      locationState: 'Rio de Janeiro',
      pricePerHour: '150'
    }
  ]

  return (
    <GridContainer>
      <MenuContainer maxWidth='350px'>
        <FilterContainerForm>
          <FilterDevForm
            developers={developers}
            onFilter={setFilteredDevelopers}
            searchQuery={searchQuery}
          />
        </FilterContainerForm>
      </MenuContainer>
      <MainContainer>
        <SettingsIconContainer>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={handleOpenModal}
            placeHolder='Buscar por nome'
          />
          <SettingsProfileIcon src={settingsIcon} onClick={handleOpenMenuHamburgerModal} />
          <CustomModal onRequestClose={handleCloseModal} isShowing={isOpen} title='Filtros' icon={filterIcon}>
            <FilterDevForm
              developers={developers}
              onFilter={setFilteredDevelopers}
            />
          </CustomModal>
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
        </SettingsIconContainer>
        {filteredDevelopers.map((dev, index) => (
          <DevContainer key={index}>
            <DevDetailsContainer>
              <PhotoContainer>
                <DevProfilePhoto />
                <ContainerDevName>
                  <StarsAndDevNameContainer>
                    <DevName>{dev.name}</DevName>
                    <IconImg src={starsIcon} />
                  </StarsAndDevNameContainer>
                  <DevLocationContainer>
                    <DevLocationText>{dev.locationState},</DevLocationText>
                    <DevLocationText>{dev.locationCity}</DevLocationText>
                  </DevLocationContainer>
                  <DevInfoContainer>
                    <DevInfoText>{dev.job}</DevInfoText>
                    <DevInfoText>{dev.seniority}</DevInfoText>
                    <DevInfoText>{dev.professional}</DevInfoText>
                  </DevInfoContainer>
                </ContainerDevName>
              </PhotoContainer>
              <LenguagesContainer>
                {dev.skills.map(skill => (
                  <LenguageBox key={skill} name={skill} />
                ))}
              </LenguagesContainer>
              <DescriptionContainer>
                <CollapsibleText maxLength={200}>
                  Desenvolvedor de software, atuo de forma estratégica na realização
                  de diagnósticos e na implementação de soluções tecnológicas.
                  Sempre posicionado a performar nos resultados dos projetos
                  de tecnologia de nossos clientes. Sou desenvolvedor web e mobile a 4 anos,
                  atualmente cursando Ciências da Computação. Tenho experiência no
                  desenvolvimento Mobile com foco no desenvolvimento Android
                </CollapsibleText>
              </DescriptionContainer>
            </DevDetailsContainer>
            <DevPriceContainer>
              <PriceText>Preço por hora:</PriceText>
              <ValueText>R$ {dev.pricePerHour},00</ValueText>

              <HireButtonContainer>
                <DefaultButton
                  active
                  backgroundColor="var(--purple-500)"
                  color="var(--white)"
                  border="var(--purple-500)"
                  type="submit"
                  onClick={() => handleOpenPaymentModal(dev)}
                >
                  CONTRATAR
                </DefaultButton>
              </HireButtonContainer>
              <CustomModal onRequestClose={handleClosePaymentModal} isShowing={isPaymentModalOpen} title='Contratar' icon={hireIcon}>
                <ModalHireContainer>
                  <DevDetailsContainer>
                    <ModalPhotoContainer>
                      <DevProfilePhoto />
                      <ModalContainerDevName>
                        <ModalStarsAndDevNameContainer>
                          <DevName>{currentDev.name}</DevName>
                          <ModalDevInfoText>{currentDev.job}</ModalDevInfoText>
                          <IconImg src={starsIcon} />
                        </ModalStarsAndDevNameContainer>
                      </ModalContainerDevName>
                    </ModalPhotoContainer>
                  </DevDetailsContainer>
                  <ModalDevPriceContainer>
                    <PriceText>Preço por hora:</PriceText>
                    <ValueText>R$ {currentDev.pricePerHour},00</ValueText>
                    <ModalRealizedProjectsContainer>
                      <RealizedProjectText>
                        Projetos realizados:
                      </RealizedProjectText>
                      <ProjectsRealizedNumber> 200</ProjectsRealizedNumber>
                    </ModalRealizedProjectsContainer>
                  </ModalDevPriceContainer>
                </ModalHireContainer>
                <InputsAndButtonHireContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
                  <ModalInputsHireContainer>
                    <ModalInputsTitleHire>Sobre o Projeto</ModalInputsTitleHire>
                    <DefaultSelect
                      {...register('category')}
                      placeHolder='Escolha uma categoria'
                    >
                      <option>Back-end</option>
                      <option>Front-end</option>
                      <option>UI/UX</option>
                      <option>Full-stack</option>
                    </DefaultSelect>
                    {errors.category?.message && (
                      <TextMesssageError>{errors.category?.message}</TextMesssageError>
                    )}
                    <DefaultSelect
                      {...register('subCategory')}
                      placeHolder='Escolha uma subcategoria'
                    >
                      <option>Rect</option>
                      <option>Vue</option>
                      <option>Angular</option>
                      <option>Next</option>
                    </DefaultSelect>
                    {errors.subCategory?.message && (
                      <TextMesssageError>{errors.subCategory?.message}</TextMesssageError>
                    )}
                    <CustomInput
                      {...register('projectName')}
                      name="projectName"
                      placeHolder="Nome do projeto"
                      type="text"
                    />
                    {errors.projectName?.message && (
                      <TextMesssageError>{errors.projectName?.message}</TextMesssageError>
                    )}
                    <CustomInput
                      {...register('coments')}
                      name="coments"
                      placeHolder="Comentários adicionais?"
                      type="text"
                    />
                    {errors.coments?.message && (
                      <TextMesssageError>{errors.coments?.message}</TextMesssageError>
                    )}
                  </ModalInputsHireContainer>
                  <ModalButtonsHireContainer>
                    <DefaultButton
                      active
                      backgroundColor="var(--purple-500)"
                      color="var(--white)"
                      border="var(--purple-500)"
                      type="submit"
                      fontSize='16px'
                    >
                      AGENDAR ENTREVISTA
                    </DefaultButton>
                    <DefaultButton
                      active
                      backgroundColor="var(--purple-500)"
                      color="var(--white)"
                      border="var(--purple-500)"
                      type="submit"
                      fontSize='16px'
                    >
                      SEGUIR PARA PAGAMENTO
                    </DefaultButton>
                  </ModalButtonsHireContainer>
                </InputsAndButtonHireContainerForm>
              </CustomModal>
              <RealizedProjectsContainer>
                <RealizedProjectText>
                  Projetos realizados:
                </RealizedProjectText>
                <ProjectsRealizedNumber> 200</ProjectsRealizedNumber>
              </RealizedProjectsContainer>
            </DevPriceContainer>
          </DevContainer>
        ))}
      </MainContainer>
    </GridContainer >
  )
}
