/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Auth } from 'aws-amplify'

import DefaultInput from '../../components/common/DefaultInput'
import DefaultButton from '../../components/common/DefaultButton'

import {
  RegisterBackground,
  RegisterContainer,
  RegisterContent,
  RegisterForm,
  RegisterFormBox,
  RegisterTextBox,
  RegisterImageLogo
} from './styles'

import WolfDevlogo from '../../assets/images/wolf-dev-logo.svg'

interface FormValuesProps {
  email: string
  password: string
  confirmPassword: string
  confirmationCode?: string
}

interface FormConfirmationProps {
  confirmationCode: string
}

function Register() {
  const formMethods = useForm()
  const { handleSubmit } = formMethods
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [isConfirmCodeStep, setIsConfirmCodeStep] = useState(false)
  const [userRegisterData, setUserRegisterData] = useState<FormValuesProps>(
    {} as FormValuesProps
  )

  const handleConnectionRequested = (data: FormValuesProps) => {
    console.log(data.email)
    setLoading(true)
    setUserRegisterData(data)

    Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email
      }
    })
      .then(() => {
        setLoading(false)
        setIsConfirmCodeStep(true)
      })
      .catch((err: any) => {
        if (err.message === 'User already exists') {
          setIsConfirmCodeStep(true)
          setLoading(false)
        } else {
          console.log(err.message)
          toast.error('Erro interno do servidor!')
          setLoading(false)
        }
      })
  }

  const handleFormSubmit = (data: FormValuesProps) => {
    if (data.email && data.password && data.password && data.confirmPassword) {
      return data.password === data.confirmPassword
        ? handleConnectionRequested(data)
        : toast.error('Os campos de senha devem ser iguais!')
    } else {
      return toast.error('Todos os campos devem estar preechidos!')
    }
  }

  const handleFormSubmitConfirmation = (data: FormConfirmationProps) => {
    if (data.confirmationCode) {
      console.log(userRegisterData.email)
      setLoading(true)

      Auth.confirmSignUp(userRegisterData.email, data.confirmationCode)
        .then((res: any) => {
          console.log(res)
          setLoading(false)
          navigate('/login')
        })
        .catch((err: any) => {
          if (err.message === 'User already exists') {
            setIsConfirmCodeStep(true)
            setLoading(false)
          } else {
            console.log(err.message)
            toast.error('Erro interno do servidor!')
            setLoading(false)
          }
        })
    } else {
      return toast.error('O campo não pode estar vazio!')
    }
  }

  return (
    <RegisterContainer>
      <RegisterBackground />
      <RegisterContent>
        <Link to="/">
          <RegisterImageLogo src={WolfDevlogo} alt="Wolf Dev Logo" />
        </Link>
        {!isConfirmCodeStep ? (
          <RegisterForm onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>
              Faça parte da <strong>WOLFDEV</strong>
            </h1>
            <RegisterFormBox>
              <DefaultInput
                name="email"
                title="Email*"
                placeholder="Digite seu Email..."
                type="text"
                formMethods={formMethods}
              />
              <DefaultInput
                name="password"
                title="Senha*"
                placeholder="Digite sua Senha..."
                type="password"
                showPasswordIcon
                formMethods={formMethods}
              />
              <DefaultInput
                name="confirmPassword"
                title="Confirme sua senha*"
                placeholder="Confirme sua senha..."
                type="password"
                showPasswordIcon
                formMethods={formMethods}
              />
            </RegisterFormBox>
            <DefaultButton active fullsize loading={loading}>
              ENTRAR
            </DefaultButton>
            <RegisterTextBox>
              <span>Já tem uma conta?</span>
              <Link to="/login">ENTRAR</Link>
            </RegisterTextBox>
          </RegisterForm>
        ) : (
          <RegisterForm onSubmit={handleSubmit(handleFormSubmitConfirmation)}>
            <h1>
              Digite o <strong>código</strong> recebido no seu
              <strong> email</strong>
            </h1>
            <RegisterFormBox>
              <RegisterFormBox>
                <DefaultInput
                  name="confirmationCode"
                  title="Codigo de verificação*"
                  placeholder="Digite seu Código..."
                  type="text"
                  formMethods={formMethods}
                />
              </RegisterFormBox>
            </RegisterFormBox>
            <DefaultButton active fullsize loading={loading}>
              CONCLUIR
            </DefaultButton>
            <RegisterTextBox>
              <span>Não recebeu nosso email?</span>
              <Link to="/register" onClick={() => setIsConfirmCodeStep(false)}>
                TENTAR CADASTRAR NOVAMENTE
              </Link>
            </RegisterTextBox>
          </RegisterForm>
        )}
      </RegisterContent>
    </RegisterContainer>
  )
}

export default Register
