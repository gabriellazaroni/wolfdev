import React from 'react'
import { FilterIcon, IconSearch, SearchBarInput, SearchContainer } from './styles'
import searchIcon from '../../assets/icons/gray-search.svg'
import filterIcon from '../../assets/icons/filter.svg'

interface SearchBarProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <SearchContainer>
      <IconSearch src={searchIcon} />
      <SearchBarInput placeholder='Buscar' value={value} onChange={onChange} />
      <FilterIcon src={filterIcon} />
    </SearchContainer>
  )
}
