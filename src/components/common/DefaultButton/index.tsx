import React, { ReactNode } from 'react'
import { PulseLoader } from 'react-spinners'
import arrow from '../../../assets/icons/purple-arrow.svg'

import { Button, ButtonLink } from './styles'

interface ButtonHeaderProps {
  children?: ReactNode
  active: boolean
  link?: string
  type?: 'submit' | 'button'
  fullsize?: boolean
  loading?: boolean
  color?: string
  backgroundColor?: string
  border?: string
  icon?: boolean
  fontSize?: string
  onClick?: () => void
}

function DefaultButton({
  children,
  active,
  link,
  fullsize,
  loading,
  color,
  backgroundColor,
  border,
  icon,
  fontSize,
  onClick
}: ButtonHeaderProps) {
  const buttonStyles = {
    color: color,
    backgroundColor: backgroundColor,
    border: border,
    fontSize: fontSize
  }

  return !link ? (
    <Button
      active={active || false}
      fullsize={fullsize}
      data-testid="button_header-component"
      disabled={loading}
      style={{ ...buttonStyles }}
      onClick={onClick}
    >
      {loading ? (
        <PulseLoader color="#bf59fd" size={10} />
      ) : (
        <>
          {children}
          {icon && (
            <img src={arrow} alt="Arrow Icon" style={{ marginLeft: '8px' }} />
          )}
        </>
      )}
    </Button>
  ) : (
    <ButtonLink
      to={link}
      active={active}
      fullsize={fullsize}
      data-testid="button_header-component_link"
    >
      {children}
    </ButtonLink>
  )
}

export default DefaultButton
