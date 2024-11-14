import React from 'react'
import { NearbyInputContainer } from './styles'
import { DefaultSelect } from '../common/DefaultSelect'
import { CustomInput } from '../common/CustomInput'
import { z } from 'zod'
import { FilterFeedHirerSchema } from '../../schemas/FilterFeedHirer'
import { UseFormRegister } from 'react-hook-form'

type FilterFeedHirerProps = z.infer<typeof FilterFeedHirerSchema>

type FilterDevFormProps = {
  register: UseFormRegister<FilterFeedHirerProps>
}

export function FilterDevForm({ register }: FilterDevFormProps) {
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
        titleInput='Preço por hora'
        placeHolder='Digite o valor'
        {...register('pricePerHour')}
      />
    </>
  )
}
