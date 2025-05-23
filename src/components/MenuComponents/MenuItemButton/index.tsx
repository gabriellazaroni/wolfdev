import React, { ReactNode } from 'react'
import { CustomModal } from '../../CustomModal'
import {
  IconAndItensMenuContainer,
  IconImg,
  TextIconMenu
} from './styles'

interface TesteProps {
  isShowing?: boolean;
  onRequestClose?: () => void;
  title: string;
  icon: string;
  toggleModal?: () => void;
  children?: React.ReactNode;
}

export const MenuItemButtton = ({
  isShowing,
  onRequestClose,
  title,
  icon,
  toggleModal,
  children
}: TesteProps) => {
  return (
    <>
      <CustomModal
        isShowing={isShowing}
        onRequestClose={onRequestClose}
        title={title}
        icon={icon}
      >

        {children}
      </CustomModal>
      <IconAndItensMenuContainer>
        <IconImg src={icon} />
        <TextIconMenu onClick={toggleModal}>{title}</TextIconMenu>
      </IconAndItensMenuContainer>
    </>
  )
}
