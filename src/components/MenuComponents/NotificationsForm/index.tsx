import React, { useState } from 'react'
import { z } from 'zod'
import { NotificationsMenuSchema } from '../../../schemas/NotificationsMenuSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItemButtton } from '../MenuItemButton'
import {
  ButtonContainer,
  EmailContainer,
  FormInputsContainer,
  MainContainer,
  MessageWarningText,
  OptionAndToggleContainer,
  OptionText,
  PlataformContainer,
  TitleToggleOptions,
  TitleWarining,
  ToggleCircle,
  ToggleOptionsContainer,
  ToggleSwitch,
  WarningMesssageContainer
} from './styles'
import DefaultButton from '../../common/DefaultButton'
import bellIcon from '../../../assets/icons/bell.svg'

export type NotificationsMenuProps = z.infer<typeof NotificationsMenuSchema>;

export function NotificationForm() {
  const [modals, setModals] = useState({
    notifications: false
  })

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue
  } = useForm<NotificationsMenuProps>({
    resolver: zodResolver(NotificationsMenuSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      emailPlatformUpdates: false,
      emailProjectInvites: false,
      emailMessages: false,
      emailDisableAll: false,
      platformProjectInvites: false,
      platformMessages: false,
      platformDisableAll: false
    }
  })

  const toggleValues = watch()

  const handleModal = (modalName: keyof typeof modals) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }))
  }

  const handleToggleChange = (toggleName: keyof NotificationsMenuProps) => {
    const newValue = !toggleValues[toggleName]

    if (toggleName === 'emailDisableAll') {
      setValue('emailDisableAll', newValue)
      if (newValue) {
        ['emailPlatformUpdates', 'emailProjectInvites', 'emailMessages'].forEach(
          (toggle) => setValue(toggle as keyof NotificationsMenuProps, false)
        )
      }
    } else if (toggleName === 'platformDisableAll') {
      setValue('platformDisableAll', newValue)
      if (newValue) {
        ['platformProjectInvites', 'platformMessages'].forEach((toggle) =>
          setValue(toggle as keyof NotificationsMenuProps, false)
        )
      }
    } else {
      setValue(toggleName, newValue)
      if (newValue) {
        ['emailPlatformUpdates', 'emailProjectInvites', 'emailMessages'].includes(toggleName)
          ? setValue('emailDisableAll', false)
          : ['platformProjectInvites', 'platformMessages'].includes(toggleName) &&
          setValue('platformDisableAll', false)
      }
    }
  }

  const handleFormSubmit = (data: NotificationsMenuProps, modalName: keyof typeof modals) => {
    console.log(data)
  }

  return (
    <MenuItemButtton
      isShowing={modals.notifications}
      onRequestClose={() => handleModal('notifications')}
      title="Notificações"
      icon={bellIcon}
      toggleModal={() => handleModal('notifications')}
    >
      <FormInputsContainer onSubmit={handleSubmit((data) => handleFormSubmit(data, 'notifications'))}>
        <MainContainer>
          <WarningMesssageContainer>
            <TitleWarining>Importante</TitleWarining>
            <MessageWarningText>
              Para atualizações importantes sobre sua atividade no Wolfdev,
              certas notificações não podem ser desativadas.
            </MessageWarningText>
          </WarningMesssageContainer>
          <ToggleOptionsContainer>
            <EmailContainer>
              <TitleToggleOptions>Email</TitleToggleOptions>
              <OptionAndToggleContainer>
                <OptionText>Receber as novidades da plataforma</OptionText>
                <ToggleSwitch
                  active={toggleValues.emailPlatformUpdates}
                  onClick={() => handleToggleChange('emailPlatformUpdates')}
                  {...register('emailPlatformUpdates')}
                >
                  <ToggleCircle active={toggleValues.emailPlatformUpdates} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
              <OptionAndToggleContainer>
                <OptionText>Quando me convidam para um projeto</OptionText>
                <ToggleSwitch
                  active={toggleValues.emailProjectInvites}
                  onClick={() => handleToggleChange('emailProjectInvites')}
                  {...register('emailProjectInvites')}
                >
                  <ToggleCircle active={toggleValues.emailProjectInvites} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
              <OptionAndToggleContainer>
                <OptionText>Quando me enviam uma mensagem</OptionText>
                <ToggleSwitch
                  active={toggleValues.emailMessages}
                  onClick={() => handleToggleChange('emailMessages')}
                  {...register('emailMessages')}
                >
                  <ToggleCircle active={toggleValues.emailMessages} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
              <OptionAndToggleContainer>
                <OptionText>Desativar todas as notificações</OptionText>
                <ToggleSwitch
                  active={toggleValues.emailDisableAll}
                  onClick={() => handleToggleChange('emailDisableAll')}
                  {...register('emailDisableAll')}
                >
                  <ToggleCircle active={toggleValues.emailDisableAll} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
            </EmailContainer>
            <PlataformContainer>
              <TitleToggleOptions>Plataforma</TitleToggleOptions>
              <OptionAndToggleContainer>
                <OptionText>Quando me convidam para um projeto</OptionText>
                <ToggleSwitch
                  active={toggleValues.platformProjectInvites}
                  onClick={() => handleToggleChange('platformProjectInvites')}
                  {...register('platformProjectInvites')}
                >
                  <ToggleCircle active={toggleValues.platformProjectInvites} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
              <OptionAndToggleContainer>
                <OptionText>Quando me enviam uma mensagem</OptionText>
                <ToggleSwitch
                  active={toggleValues.platformMessages}
                  onClick={() => handleToggleChange('platformMessages')}
                  {...register('platformMessages')}
                >
                  <ToggleCircle active={toggleValues.platformMessages} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
              <OptionAndToggleContainer>
                <OptionText>Desativar todas as notificações</OptionText>
                <ToggleSwitch
                  active={toggleValues.platformDisableAll}
                  onClick={() => handleToggleChange('platformDisableAll')}
                  {...register('platformDisableAll')}
                >
                  <ToggleCircle active={toggleValues.platformDisableAll} />
                </ToggleSwitch>
              </OptionAndToggleContainer>
            </PlataformContainer>
          </ToggleOptionsContainer>
        </MainContainer>
        <ButtonContainer>
          <DefaultButton
            active
            backgroundColor="var(--purple-500)"
            color="var(--white)"
            border="var(--purple-500)"
            type="submit"
          >
            AVANÇAR
          </DefaultButton>
        </ButtonContainer>
      </FormInputsContainer>
    </MenuItemButtton>
  )
}
