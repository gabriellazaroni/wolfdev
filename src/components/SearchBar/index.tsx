import React from 'react'
import { FilterIcon, IconSearch, SearchBarInput, SearchContainer } from './styles'
import searchIcon from '../../assets/icons/gray-search.svg'
import filterIcon from '../../assets/icons/filter.svg'

interface SearchBarProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  placeHolder?: string
}
export function SearchBar({ value, onChange, onClick, placeHolder }: SearchBarProps) {
  return (
    <SearchContainer>
      <IconSearch src={searchIcon} />
      <SearchBarInput placeholder={placeHolder} value={value} onChange={onChange} />
      <FilterIcon src={filterIcon} onClick={onClick} />
    </SearchContainer>
  )
}
