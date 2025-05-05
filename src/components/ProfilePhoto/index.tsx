import React from 'react'
import { CirclePhotoContainer, PhotoImg } from './styles'
import profilePhoto from '../../assets/images/photo.svg'

interface ProfilePhotoProps {
  photo?: string
}

export function ProfilePhoto({ photo }: ProfilePhotoProps) {
  return (
    <CirclePhotoContainer>
      <PhotoImg src={photo} />
    </CirclePhotoContainer>
  )
}
