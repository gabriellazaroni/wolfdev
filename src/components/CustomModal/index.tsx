import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import 'react-modal'
import { StyledModal } from './styles'

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
          {children}
        </StyledModal>
      </React.Fragment>,
      document.body
    )
    : null
