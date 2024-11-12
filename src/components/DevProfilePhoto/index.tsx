import React from 'react'
import { CirclePhotoContainer, PhotoImg } from './styles'
import profilePhoto from '../../assets/images/photo.svg'

export function DevProfilePhoto() {
  return (
    <CirclePhotoContainer>
      <PhotoImg src={profilePhoto} />
    </CirclePhotoContainer>
  )
}
