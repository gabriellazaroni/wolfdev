import React, { ChangeEvent } from 'react'
import { ButtonInputImg, Container, Img, Input, Title } from './styles'

interface PlataformInputProps {
  width?: string
  maxWidth?: string
  height?: string
  placeHolder?: string
  titleInput?: string
  type?: string
  typeButton?: 'button' | 'submit'
  name?: string
  id?: string
  required?: boolean
  value?: string | number
  src?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput = React.forwardRef<
  HTMLInputElement,
  PlataformInputProps
>(
  (
    {
      width,
      maxWidth,
      height,
      placeHolder,
      titleInput,
      type,
      typeButton,
      name,
      id,
      required,
      value,
      src,
      onChange
    },
    ref
  ) => {
    const InputStyle = {
      width,
      maxWidth,
      height
    }

    return (
      <Container>
        <Title>{titleInput}</Title>
        <Input
          style={{ ...InputStyle }}
          id={id}
          name={name}
          autoComplete="on"
          type={type}
          placeholder={placeHolder}
          required={required}
          onChange={onChange}
          value={value}
          ref={ref}
        />
        <ButtonInputImg type={typeButton}>
          <Img src={src} />
        </ButtonInputImg>
      </Container>
    )
  }
)
