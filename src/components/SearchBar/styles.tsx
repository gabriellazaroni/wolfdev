import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

export const IconSearch = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: var(--gray-800);
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  color: var(--gray-100);
  font-size: var(--font-sm);
  padding: 0 42px;
  &::placeholder {
    color: var(--gray-500);
  }
`

export const FilterIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
