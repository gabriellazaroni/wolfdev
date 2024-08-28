/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, ReactNode, useState } from 'react'
import InputMask from 'react-input-mask'

import {
  DefaulSelectContainerSelect,
  DefaultSelectContainer,
  DefaultSelectContainerText,
  DefaultSelectTitleBox,
  MainContainer
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
    <MainContainer>
      <DefaultSelectContainerText>
        {title}
      </DefaultSelectContainerText>
      <DefaultSelectContainer
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
                <DefaulSelectContainerSelect
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                />
              )}
            </InputMask>
          ) : (
            <DefaulSelectContainerSelect
              placeholder={placeholder}
            >
              {children}
            </DefaulSelectContainerSelect>
          )}
        </div>
      </DefaultSelectContainer>
      <DefaultSelectTitleBox>
      </DefaultSelectTitleBox>
    </MainContainer>
  )
}
