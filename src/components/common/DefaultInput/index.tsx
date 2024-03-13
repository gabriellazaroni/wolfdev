/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useState } from 'react';
import { get } from 'lodash';
import InputMask from 'react-input-mask';

import { useController } from 'react-hook-form';

import {
  DefaultInputContainer,
  DefaultInputContainerInput,
  DefaultInputContainerText,
  DefaultInputIconDiv,
  DefaultInputTitleBox
} from './styles';

import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/icons/eyeSlash.svg';

interface DefaultInputProps {
  placeholder?: string;
  title?: string;
  size?: string;
  type: 'text' | 'password';
  img?: string;
  name: string;
  value?: number | string;
  max?: number;
  showPasswordIcon?: boolean;
  formMethods?: any;
  defaultValue?: string;
  handleChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  mask?: string | Array<string>;
  maskChar?: string | undefined | null;
}

const DefaultInput = ({
  placeholder,
  title,
  size,
  type,
  img,
  name,
  defaultValue = '',
  max,
  showPasswordIcon,
  formMethods,
  mask,
  maskChar = null
}: DefaultInputProps) => {
  const [isPasswordVisibled, setIsPasswordVisibled] = useState(false);
  const [passwordType, setIsPasswordType] = useState('password');
  const [focusColor, setIsFocusColor] = useState(false);

  const { control, errors } = formMethods;

  const {
    field: { onChange, onBlur, value, ...inputProps }
  } = useController({
    name,
    control,
    defaultValue
  });

  let errorProps = {};
  const error = get(errors, name);
  if (error) {
    errorProps = {
      error: true,
      helperText: error.message
    };
  }

  const handleSwitchImage = () => {
    if (isPasswordVisibled) return <EyeSlash />;
    else return <Eye />;
  };

  const handleImageClick = () => {
    if (isPasswordVisibled) {
      setIsPasswordType('password');
      setIsPasswordVisibled(false);
    } else {
      setIsPasswordType('text');
      setIsPasswordVisibled(true);
    }
  };
  return (
    <div style={{ width: '100%' }}>
      <DefaultInputContainerText>
        {/* errors={errors[name]?.message ? true : false} */}
        {title}
      </DefaultInputContainerText>
      <DefaultInputContainer
        size={size}
        onFocus={() => setIsFocusColor(true)}
        onBlur={() => setIsFocusColor(false)}
        colored={focusColor}
      // errors={errors[name]?.message ? true : false}
      >
        <div>
          {img ? <img src={img} alt="R$" /> : null}
          {mask ? (
            <InputMask
              mask={mask}
              maskPlaceholder={null}
              {...{
                onChange,
                onBlur,
                value,
                maskChar
              }}
            >
              {() => (
                <DefaultInputContainerInput
                  type={type === 'password' ? passwordType : type}
                  placeholder={placeholder}
                  maxLength={max || undefined}
                  defaultValue={defaultValue}
                  {...inputProps}
                />
              )}
            </InputMask>
          ) : (
            <DefaultInputContainerInput
              type={type === 'password' ? passwordType : type}
              placeholder={placeholder}
              maxLength={max || undefined}
              {...{
                onChange,
                onBlur,
                value
              }}
              {...inputProps}
              {...errorProps}
            />
          )}

          {showPasswordIcon ? (
            <DefaultInputIconDiv onClick={() => handleImageClick()}>
              {handleSwitchImage()}
            </DefaultInputIconDiv>
          ) : null}
        </div>
      </DefaultInputContainer>
      <DefaultInputTitleBox>
        {errors && <strong>{errors[name]?.message}</strong>}
      </DefaultInputTitleBox>
    </div>
  );
};

export default DefaultInput;
