import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ButtonSaveAndCancelContainer,
  DivisorSelectContainer,
  EditInfoButtonContainer,
  FormEditInfoInputsContainer,
  EditLinksInputsContainer,
  EmployersNumberContnainer,
  EmployersNumberText,
  GridContainer,
  IconImg,
  InfoCompanyBox,
  InfoContainer,
  InfoMainContainer,
  LenguagesContainer,
  LinkSocialMedia,
  MainContainer,
  MessageErrorContainer,
  PhotoAndButtonContainer,
  SocialMediaContainer,
  SocialMediaIcon,
  TextMesssageError,
  TitleAndInfoContainer,
  TitleLinkText,
  TitleText
} from './styles'
import { InfoCompanyEditSchema } from '../../schemas/InfoCompanyEditSchema'
import { MenuContainer } from '../../components/MenuComponents/MenuContainer'
import { ProfilePhoto } from '../../components/ProfilePhoto'
import { LenguageBox } from '../../components/LenguageBox'
import { CustomInput } from '../../components/common/CustomInput'
import { DefaultSelect } from '../../components/common/DefaultSelect'
import companyPhoto from '../../assets/images/company-photo.svg'
import employersIcon from '../../assets/icons/employers.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import DefaultButton from '../../components/common/DefaultButton'

export type InfoCompanyEditProps = z.infer<
  typeof InfoCompanyEditSchema
>

export function HirerProfile() {
  const [showInputs, setShowInputs] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InfoCompanyEditProps>({
    resolver: zodResolver(InfoCompanyEditSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      companyName: '',
      local: '',
      workingModel: '',
      employeesNumber: '',
      site: '',
      linkedin: '',
      facebook: '',
      instagram: ''
    }
  })

  const handleEditClick = () => {
    setShowInputs(!showInputs)
    reset()
  }

  const handleFormSubmit = (data: InfoCompanyEditProps) => {
    console.log(data)
  }

  return (
    <GridContainer>
      <MenuContainer findDevs={true} maxWidth="350px" />
      <MainContainer>
        <InfoCompanyBox>
          <PhotoAndButtonContainer>
            <InfoMainContainer>
              <ProfilePhoto photo={companyPhoto} />
              <TitleAndInfoContainer>
                <TitleText>WOLFDEV</TitleText>
                <InfoContainer>
                  <LenguagesContainer>
                    <LenguageBox name="Presencial" />
                    <LenguageBox name="Belo Horizonte" />
                    <LenguageBox name="Site" />
                  </LenguagesContainer>
                  <EmployersNumberContnainer>
                    <IconImg src={employersIcon} />
                    <EmployersNumberText>1 - 10</EmployersNumberText>
                  </EmployersNumberContnainer>
                  <SocialMediaContainer>
                    <LinkSocialMedia
                      href="https://www.linkedin.com/company/wolfdeveloper/"
                      target="_blank"
                    >
                      <SocialMediaIcon src={linkedinIcon} alt="LinkedIn" />
                    </LinkSocialMedia>
                    <LinkSocialMedia href="">
                      <SocialMediaIcon src={facebookIcon} alt="Facebook" />
                    </LinkSocialMedia>
                    <LinkSocialMedia href="">
                      <SocialMediaIcon src={instagramIcon} alt="Instagram" />
                    </LinkSocialMedia>
                  </SocialMediaContainer>
                </InfoContainer>
              </TitleAndInfoContainer>
            </InfoMainContainer>
            <EditInfoButtonContainer>
              <DefaultButton
                active
                backgroundColor="var(--purple-500)"
                color="var(--white)"
                border="var(--purple-500)"
                onClick={handleEditClick}
              >
                EDITAR
              </DefaultButton>
            </EditInfoButtonContainer>
          </PhotoAndButtonContainer>
          {showInputs && (
            <FormEditInfoInputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
              <DivisorSelectContainer>
                <MessageErrorContainer>
                  <CustomInput
                    titleInput="Nome da Empresa"
                    placeHolder="WOLFDEV"
                    type="text"
                    backgroundColor='#1a1a1e'
                    {...register('companyName')}
                  />
                  {errors.companyName?.message && (
                    <TextMesssageError>{errors.companyName?.message}</TextMesssageError>
                  )}
                </MessageErrorContainer>
                <MessageErrorContainer>
                  <CustomInput
                    titleInput="Local"
                    placeHolder="Belo Horizonte, Minas Gerais, Brasil"
                    type="text"
                    backgroundColor='#1a1a1e'
                    {...register('local')}
                  />
                  {errors.local?.message && (
                    <TextMesssageError>{errors.local?.message}</TextMesssageError>
                  )}
                </MessageErrorContainer>
              </DivisorSelectContainer>
              <DivisorSelectContainer>
                <MessageErrorContainer>
                  <DefaultSelect
                    titleSelect="Modelo de trabalho"
                    placeHolder="Selecione"
                    type="text"
                    backgroundColor='#1a1a1e'
                    {...register('workingModel')}
                  >
                    <option>Presencial</option>
                    <option>Remoto</option>
                    <option>Híbrido</option>
                  </DefaultSelect>
                  {errors.workingModel?.message && (
                    <TextMesssageError>{errors.workingModel?.message}</TextMesssageError>
                  )}
                </MessageErrorContainer>
                <MessageErrorContainer>
                  <DefaultSelect
                    titleSelect="Números de funcionários"
                    placeHolder="Selecione"
                    type="text"
                    backgroundColor='#1a1a1e'
                    {...register('employeesNumber')}
                  >
                    <option>0 - 1</option>
                    <option>1 - 5</option>
                    <option>5 - 10</option>
                    <option>10 +</option>
                  </DefaultSelect>
                  {errors.employeesNumber?.message && (
                    <TextMesssageError>{errors.employeesNumber?.message}</TextMesssageError>
                  )}
                </MessageErrorContainer>
              </DivisorSelectContainer>
              <EditLinksInputsContainer>
                <TitleLinkText>Links </TitleLinkText>
                <DivisorSelectContainer>
                  <MessageErrorContainer>
                    <CustomInput
                      titleInput="Site"
                      placeHolder="https://wolfdev.tech"
                      type="text"
                      backgroundColor='#1a1a1e'
                      {...register('site')}
                    />
                    {errors.site?.message && (
                      <TextMesssageError>{errors.site?.message}</TextMesssageError>
                    )}
                  </MessageErrorContainer>
                  <MessageErrorContainer>
                    <CustomInput
                      titleInput="Linkedin"
                      placeHolder="https://linkedin.com/nomedeusuário"
                      type="text"
                      backgroundColor='#1a1a1e'
                      {...register('linkedin')}
                    />
                    {errors.linkedin?.message && (
                      <TextMesssageError>{errors.linkedin?.message}</TextMesssageError>
                    )}
                  </MessageErrorContainer>
                </DivisorSelectContainer>
                <DivisorSelectContainer>
                  <MessageErrorContainer>
                    <CustomInput
                      titleInput="Facebook"
                      placeHolder="https://facebook.com/nomedeusuário"
                      type="text"
                      backgroundColor='#1a1a1e'
                      {...register('facebook')}
                    />
                    {errors.facebook?.message && (
                      <TextMesssageError>{errors.facebook?.message}</TextMesssageError>
                    )}
                  </MessageErrorContainer>
                  <MessageErrorContainer>
                    <CustomInput
                      titleInput="Instagram"
                      placeHolder="https://instagram.com/nomedeusuário"
                      type="text"
                      backgroundColor='#1a1a1e'
                      {...register('instagram')}
                    />
                    {errors.instagram?.message && (
                      <TextMesssageError>{errors.instagram?.message}</TextMesssageError>
                    )}
                  </MessageErrorContainer>
                </DivisorSelectContainer>
              </EditLinksInputsContainer>
              <ButtonSaveAndCancelContainer>
                <DefaultButton
                  active
                  backgroundColor="var(--purple-500)"
                  color="var(--white)"
                  border="var(--purple-500)"
                  type="submit"
                >
                  SALVAR
                </DefaultButton>
                <DefaultButton
                  active
                  backgroundColor="var(--gray-700)"
                  color="var(--white)"
                  border="var(--purple-500)"
                  onClick={handleEditClick}
                >
                  CANCELAR
                </DefaultButton>
              </ButtonSaveAndCancelContainer>
            </FormEditInfoInputsContainer>
          )}
        </InfoCompanyBox>
      </MainContainer>
    </GridContainer>
  )
}
