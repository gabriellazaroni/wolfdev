import React, { ChangeEvent, ReactNode } from 'react'
import { ButtonInputImg, Container, Img, Title, Select } from './styles'

interface PlataformSelectProps {
  children?: ReactNode
  width?: string
  maxWidth?: string
  height?: string
  placeHolder?: string
  titleSelect?: string
  type?: string
  typeButton?: 'button' | 'submit'
  name?: string
  id?: string
  required?: boolean
  value?: string | number
  src?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const DefaultSelect = React.forwardRef<
  HTMLSelectElement,
  PlataformSelectProps
>(
  (
    {
      width,
      maxWidth,
      height,
      placeHolder,
      titleSelect,
      type,
      typeButton,
      name,
      id,
      required,
      value,
      src,
      onChange,
      children
    },
    ref
  ) => {
    const SelectStyle = {
      width,
      maxWidth,
      height
    }

    return (
      <Container>
        <Title>{titleSelect}</Title>
        <Select
          style={{ ...SelectStyle }}
          id={id}
          name={name}
          autoComplete="on"
          required={required}
          onChange={onChange}
          value={value}
          ref={ref}
        >
          {children}
        </Select>
        <ButtonInputImg type={typeButton}>
          <Img src={src} />
        </ButtonInputImg>
      </Container>
    )
  }
)
