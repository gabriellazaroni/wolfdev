import React from 'react'
import {
  IconAndTitleContainer,
  IconImg,
  RepositoryGithubContainer,
  TitleProject
} from './styles'

import projectIcon from '../../assets/icons/github-project.svg'

interface GithubContainerBoxProps {
  projectName?: string
}

export function GithubContainerBox({ projectName }: GithubContainerBoxProps) {
  return (
    <RepositoryGithubContainer>
      <IconAndTitleContainer>
        <IconImg src={projectIcon} />
        <TitleProject>{projectName}</TitleProject>
      </IconAndTitleContainer>
    </RepositoryGithubContainer>
  )
}
