import React, { useEffect } from 'react'
import { NearbyInputContainer } from './styles'
import { DefaultSelect } from '../common/DefaultSelect'
import { CustomInput } from '../common/CustomInput'
import { z } from 'zod'
import { FilterFeedHirerSchema } from '../../schemas/FilterFeedHirer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FilterFeedHirerProps = z.infer<typeof FilterFeedHirerSchema>;

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

type FilterDevFormProps = {
  developers: Developer[];
  onFilter: (filteredDevelopers: Developer[]) => void;
  searchQuery?: string
};

export function FilterDevForm({ developers, onFilter, searchQuery }: FilterDevFormProps) {
  const {
    register,
    watch
  } = useForm<FilterFeedHirerProps>({
    resolver: zodResolver(FilterFeedHirerSchema),
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

  useEffect(() => {
    const filtered = developers.filter(dev => {
      const matchesSkills = skills ? dev.skills.includes(skills) : true
      const matchesJob = service ? dev.job === service : true
      const matchesProfessional = professional ? dev.professional === professional : true
      const matchesSeniority = seniority ? dev.seniority === seniority : true
      const matchesLocationCity = locationCity ? dev.locationCity === locationCity : true
      const matchesLocationState = locationState ? dev.locationState === locationState : true
      const matchesPricePerHour = pricePerHour ? dev.pricePerHour.includes(pricePerHour) : true
      const matchesName = searchQuery
        ? dev.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true

      return (
        matchesSkills &&
        matchesJob &&
        matchesProfessional &&
        matchesSeniority &&
        matchesLocationCity &&
        matchesLocationState &&
        matchesPricePerHour &&
        matchesName
      )
    })

    onFilter(filtered)
  }, [
    service,
    skills,
    professional,
    seniority,
    locationState,
    locationCity,
    pricePerHour,
    searchQuery
  ])

  return (
    <>
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
        titleInput="Preço por hora"
        placeHolder="Digite o valor"
        {...register('pricePerHour')}
      />
    </>
  )
}
