import styled from 'styled-components'

export const RepositoryGithubContainer = styled.div`
  width: 100%;
  height: 125px;
  background-color: var(--gray-800);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #bf59fd;
    transition: border 0.4s ease;
  }
  cursor: pointer;
`

export const IconAndTitleContainer = styled.div`
  display: flex;
  gap: 17px;
  padding: 18px 15px;
`

export const TitleProject = styled.div`
  font-size: var(--font-n);
  font-weight: 400;
  color: var(--gray-100);
`

export const IconImg = styled.img`
  display: block;
  width: 20px;
`
