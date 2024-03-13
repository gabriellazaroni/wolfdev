import React, { ReactNode } from 'react';
import { PulseLoader } from 'react-spinners';

import { Button, ButtonLink } from './styles';

interface ButtonHeaderProps {
  children?: ReactNode;
  active: boolean;
  link?: string;
  type?: 'submit' | 'button';
  fullsize?: boolean;
  loading?: boolean;
  color?: string;
  backgroundColor?: string;
  border?: string;
}

function DefaultButton({
  children,
  active,
  link,
  fullsize,
  loading,
  color,
  backgroundColor,
  border
}: ButtonHeaderProps) {
  const buttonStyles = {
    color: color,
    backgroundColor: backgroundColor,
    border: border
  };

  return !link ? (
    <Button
      active={active || false}
      fullsize={fullsize}
      data-testid="button_header-component"
      disabled={loading}
      style={{ ...buttonStyles }}
    >
      {loading ? <PulseLoader color="#bf59fd" size={10} /> : children}
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
  );
}

export default DefaultButton;
