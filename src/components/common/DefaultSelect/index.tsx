/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, ReactNode, useState } from 'react'
import InputMask from 'react-input-mask'

import {
  DefaultInputContainer,
  DefaultInputContainerInput,
  DefaultInputContainerText,
  DefaultInputTitleBox
} from './styles'


interface DefaultSelectProps {
  placeholder?: string
  title?: string
  size?: string
  type?: 'text' | 'password'
  img?: string
  name?: string
  value?: number | string
  max?: number
  formMethods?: any
  defaultValue?: string
  handleChange?: (value: ChangeEvent<HTMLInputElement>) => void
  mask?: string | Array<string>
  maskChar?: string | undefined | null
  children?: ReactNode
}

export const DefaultSelect = ({
  placeholder,
  title,
  size,
  img,
  name,
  defaultValue = '',
  mask,
  maskChar = null,
  children
}: DefaultSelectProps) => {
  return (
    <div style={{ width: '100%' }}>
      <DefaultInputContainerText>
        {title}
      </DefaultInputContainerText>
      <DefaultInputContainer
        size={size}
      >
        <div style={{ background: '#121214' }}>
          {mask ? (
            <InputMask
              mask={mask}
              maskPlaceholder={null}
              {...{
                maskChar
              }}
            >
              {() => (
                <DefaultInputContainerInput
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                />
              )}
            </InputMask>
          ) : (
            <DefaultInputContainerInput
              placeholder={placeholder}
            >
              {children}
            </DefaultInputContainerInput>
          )}
        </div>
      </DefaultInputContainer>
      <DefaultInputTitleBox>
      </DefaultInputTitleBox>
    </div>
  )
}
