import React from 'react'

import {
  ContainerMain,
  ContainerText,
  ImgSocialMediaIcons,
  SocialMediaIconsContainer,
  Text,
  LogoAndSocialMediaContainer,
  WhatsAppLink,
  CircleUpContainer
} from './styles'

import { ReactComponent as WolfDevlogo } from '../../../assets/images/wolf-dev-logo.svg'
import { ReactComponent as CircleUp } from '../../../assets/icons/circle-up.svg'
import whatsappIcon from '../../../assets/icons/purple-whatsapp.svg'
import instagramIcon from '../../../assets/icons/purple-instagram.svg'

function FooterSection() {
  const phoneNUmber = '5531973346346'
  const whatsAppLink = `https://wa.me/${phoneNUmber}`

  return (
    <ContainerMain>
      <LogoAndSocialMediaContainer>
        <ContainerText>
          <WolfDevlogo />
          <Text>Copyright © WOLFDEV</Text>
        </ContainerText>
        <SocialMediaIconsContainer>
          <WhatsAppLink href={whatsAppLink} target="_blank" rel="noreferrer">
            <ImgSocialMediaIcons src={whatsappIcon} />
          </WhatsAppLink>
          <WhatsAppLink
            href="https://www.instagram.com/wolfdev.inc/"
            target="_blank"
            rel="noreferrer"
          >
            <ImgSocialMediaIcons src={instagramIcon} />
          </WhatsAppLink>
        </SocialMediaIconsContainer>
      </LogoAndSocialMediaContainer>
      <CircleUpContainer>
        <CircleUp
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      </CircleUpContainer>
    </ContainerMain>
  )
}

export default FooterSection
