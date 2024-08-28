import React, { ChangeEvent, useState } from 'react'
import { get } from 'lodash'
import InputMask from 'react-input-mask'

import {
  DefaultInputContainer,
  DefaultInputContainerInput,
  DefaultInputContainerText,
  DefaultInputIconDiv,
  DefaultInputTitleBox
} from './styles'

import { ReactComponent as Eye } from '../../../assets/icons/eye.svg'
import { ReactComponent as EyeSlash } from '../../../assets/icons/eyeSlash.svg'

interface DefaultInputProps {
  placeholder?: string
  title?: string
  size?: string
  type: 'text' | 'password'
  img?: string
  name: string
  value?: number | string
  max?: number
  showPasswordIcon?: boolean
  defaultValue?: string
  handleChange?: (value: ChangeEvent<HTMLInputElement>) => void
  mask?: string | Array<string>
  maskChar?: string | undefined | null
}

export const DefaultInput = ({
  placeholder,
  title,
  size,
  type,
  img,
  name,
  defaultValue = '',
  max,
  showPasswordIcon,
  mask,
  maskChar = null
}: DefaultInputProps) => {
  const [isPasswordVisibled, setIsPasswordVisibled] = useState(false)
  const [passwordType, setIsPasswordType] = useState('password')
  const [focusColor, setIsFocusColor] = useState(false)

  const handleSwitchImage = () => {
    if (isPasswordVisibled) return <EyeSlash />
    else return <Eye />
  }

  const handleImageClick = () => {
    if (isPasswordVisibled) {
      setIsPasswordType('password')
      setIsPasswordVisibled(false)
    } else {
      setIsPasswordType('text')
      setIsPasswordVisibled(true)
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <DefaultInputContainerText>{title}</DefaultInputContainerText>
      <DefaultInputContainer
        size={size}
        onFocus={() => setIsFocusColor(true)}
        onBlur={() => setIsFocusColor(false)}
        colored={focusColor}
      >
        <div style={{ background: '#121214' }}>
          {img ? <img src={img} alt="R$" /> : null}
          {mask ? (
            <InputMask mask={mask}>
              {() => (
                <DefaultInputContainerInput
                  type={type === 'password' ? passwordType : type}
                  placeholder={placeholder}
                  maxLength={max || undefined}
                  defaultValue={defaultValue}
                />
              )}
            </InputMask>
          ) : (
            <DefaultInputContainerInput
              type={type === 'password' ? passwordType : type}
              placeholder={placeholder}
              maxLength={max || undefined}
            />
          )}

          {showPasswordIcon ? (
            <DefaultInputIconDiv onClick={() => handleImageClick()}>
              {handleSwitchImage()}
            </DefaultInputIconDiv>
          ) : null}
        </div>
      </DefaultInputContainer>
      <DefaultInputTitleBox></DefaultInputTitleBox>
    </div>
  )
}
