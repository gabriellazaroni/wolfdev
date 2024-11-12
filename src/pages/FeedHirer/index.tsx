import React, { useContext, useEffect, useState } from 'react'
import {
  NearbyInputContainer,
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
  StarsAndDevNameContainer
} from './styles'
import { MenuContainer } from '../../components/MenuComponents/MenuContainer'
import { SearchBar } from '../../components/SearchBar'
import { DevProfilePhoto } from '../../components/DevProfilePhoto'
import starsIcon from '../../assets/icons/stars.svg'
import { LenguageBox } from '../../components/LenguageBox'
import { CollapsibleText } from '../../components/Collapsibletext'
import DefaultButton from '../../components/common/DefaultButton'
import { MenuContext } from '../../contexts/MenuContext'
import settingsIcon from '../../assets/icons/dots-settings.svg'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FilterFeedHirerSchema } from '../../schemas/FilterFeedHirer'
import { CustomInput } from '../../components/common/CustomInput'

export type FilterFeedHirerProps = z.infer<
  typeof FilterFeedHirerSchema
>

export function FeedHirer() {
  const { toggleMenu } = useContext(MenuContext)

  const {
    register,
    watch
  } = useForm<FilterFeedHirerProps>({
    resolver: zodResolver(FilterFeedHirerSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      service: '',
      skills: '',
      professional: '',
      seniority: '',
      locationState: '',
      locationCity: '',
      pricePerHour: ''
    }
  })

  const service = watch('service')
  const skills = watch('skills')
  const professional = watch('professional')
  const seniority = watch('seniority')
  const locationState = watch('locationState')
  const locationCity = watch('locationCity')
  const pricePerHour = watch('pricePerHour')

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDevelopers, setFilteredDevelopers] = useState([])

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

  const handleFilterChange = () => {
    const filtered = developers.filter(dev => {
      const matchesSkills = skills ? dev.skills.includes(skills) : true
      const matchesJob = service ? dev.job === service : true
      const matchesSeniority = seniority ? dev.seniority === seniority : true
      const matchesProfessional = professional ? dev.professional === professional : true
      const matchesLocationCity = locationCity ? dev.locationCity === locationCity : true
      const matchesLocationState = locationState ? dev.locationState === locationState : true
      const matchesPricePerHour = pricePerHour ? dev.pricePerHour.includes(pricePerHour) : true
      const matchesName = searchQuery ? dev.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
      return matchesSkills &&
        matchesJob &&
        matchesProfessional &&
        matchesName &&
        matchesSeniority &&
        matchesLocationCity &&
        matchesLocationState &&
        matchesPricePerHour
    })

    setFilteredDevelopers(filtered)
  }

  useEffect(() => {
    handleFilterChange()
  }, [service, skills, professional, seniority, locationState, locationCity, searchQuery, pricePerHour])

  return (
    <GridContainer>
      <MenuContainer maxWidth='350px'>
        <FilterContainerForm>
          <DefaultSelect
            titleSelect="Serviço"
            placeHolder="Todas as profissões"
            type="text"
            {...register('service')}
          >
            <option value="Back-end Developer">Back-end Developer</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Designer">Designer</option>
          </DefaultSelect>
          <DefaultSelect
            titleSelect="Habilidades"
            placeHolder="Todas as habilidades"
            type="text"
            {...register('skills')}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
          </DefaultSelect>
          <DefaultSelect
            titleSelect="Profissional"
            placeHolder="Todos os profissionais"
            type="text"
            {...register('professional')}
          >
            <option value="Freelancer">Freelancer</option>
            <option value="Full-time">Full-time</option>
          </DefaultSelect>
          <DefaultSelect
            titleSelect="Senioridade"
            placeHolder="Todas as senioridades"
            type="text"
            {...register('seniority')}
          >
            <option value="Senior">Senior</option>
            <option value="Pleno">Pleno</option>
            <option value="Junior">Junior</option>
          </DefaultSelect>
          <NearbyInputContainer>
            <DefaultSelect
              titleSelect="Localização do Profissional"
              placeHolder="Todos os estados"
              type="text"
              {...register('locationState')}
            >
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </DefaultSelect>
            <DefaultSelect
              placeHolder="Todas as cidades"
              type="text"
              {...register('locationCity')}
            >
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </DefaultSelect>
          </NearbyInputContainer>
          <CustomInput
            titleInput='Preço por hora'
            placeHolder='Digite o valor'
            {...register('pricePerHour')}
          />
        </FilterContainerForm>
      </MenuContainer>
      <MainContainer>
        <SettingsIconContainer>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SettingsProfileIcon src={settingsIcon} onClick={toggleMenu} />
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
              <DefaultButton
                active
                backgroundColor="var(--purple-500)"
                color="var(--white)"
                border="var(--purple-500)"
                type="submit"
              >
                CONTRATAR
              </DefaultButton>
              <RealizedProjectsContainer>
                <RealizedProjectText>
                  Projetos realizados:
                  <ProjectsRealizedNumber> 200</ProjectsRealizedNumber>
                </RealizedProjectText>
              </RealizedProjectsContainer>
            </DevPriceContainer>
          </DevContainer>
        ))}
      </MainContainer>
    </GridContainer>
  )
}
