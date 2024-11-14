import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import 'react-modal'
import { ButtonAndTitleContainer, IconAndTitleContainer, IconCloseButton, ImgIcon, StyledModal } from './styles'
import closeButtonIcon from '../../assets/icons/close-button.svg'
import { TitleModal } from '../MenuComponents/MenuItemButton/styles'

export interface ModalProps {
  isShowing?: boolean
  children?: ReactNode
  onRequestClose?: () => void
  title?: string
  icon?: string
}

export const CustomModal: FC<ModalProps> = ({
  onRequestClose,
  isShowing,
  children,
  title,
  icon,
  ...restProps
}) =>
  isShowing
    ? ReactDOM.createPortal(
      <React.Fragment {...restProps}>
        <StyledModal
          isOpen={true}
          onRequestClose={() => onRequestClose?.()}
          className="react-auth-modal-content"
          style={{
            overlay: {
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          <ButtonAndTitleContainer>
            <IconAndTitleContainer>
              <ImgIcon src={icon} />
              <TitleModal>
                {title}
              </TitleModal>
            </IconAndTitleContainer>
            <IconCloseButton src={closeButtonIcon} onClick={onRequestClose} />
          </ButtonAndTitleContainer>
          {children}
        </StyledModal>
      </React.Fragment>,
      document.body
    )
    : null
