/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';

import DefaultInput from '../../components/common/DefaultInput';
import DefaultButton from '../../components/common/DefaultButton';

import {
  ImgContainer,
  LoginBackground,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormRow,
  LoginImageLogo
} from './styles';

import backgroundWolf from '../../assets/images/background-wolf.svg';
import { ReactComponent as WolfDevlogo } from '../../assets/images/wolf-dev-logo.svg';
import { ReactComponent as CheckboxActive } from '../../assets/icons/checkboxActive.svg';
import { ReactComponent as CheckboxNonActive } from '../../assets/icons/checkboxNonActive.svg';
import { useAuth, AuthContextProps } from '../../providers/Auth';

interface FormValuesProps {
  email: string;
  password: string;
  remindMe: boolean;
}

function Login() {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;
  const { changeToken }: AuthContextProps = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [remindMe, setRemindMe] = useState(false);

  const handleConnectionRequested = (data: FormValuesProps) => {
    setLoading(true);
    Auth.signIn({
      username: data.email,
      password: data.password
    })
      .then((res: any) => {
        navigate('/app/home');
        setLoading(false);
        console.log(res);
        changeToken();
      })
      .catch((err: any) => {
        if (err.message === 'Incorrect username or password.') {
          toast.error('Usuário ou senha incorretos!');
        } else {
          console.log(err.message);
          toast.error('Erro interno do servidor!');
          setLoading(false);
        }
      });
  };

  const handleFormSubmit = (data: FormValuesProps) => {
    if (data.email && data.password) {
      return handleConnectionRequested({ ...data, remindMe: remindMe });
    } else {
      if (!data.email) {
        return toast.error('O campo Email não pode estar vazio!');
      } else {
        return toast.error('O campo Senha não pode estar vazio!');
      }
    }
  };
  return (
    <LoginContainer>
      <LoginContent>
        <Link to="/">
          <LoginImageLogo>
            <WolfDevlogo title="WolfDev logo" />
          </LoginImageLogo>
        </Link>
        <LoginForm onSubmit={handleSubmit(handleFormSubmit)}>
          <h1>
            Entre na <strong>sua conta</strong>
          </h1>
          <DefaultInput
            name="email"
            title="Email"
            placeholder="Digite seu Email..."
            type="text"
            formMethods={formMethods}
          />
          <DefaultInput
            name="password"
            title="Senha"
            placeholder="Digite sua Senha..."
            type="password"
            showPasswordIcon
            formMethods={formMethods}
          />
          <LoginFormRow>
            <div onClick={() => setRemindMe(!remindMe)}>
              {remindMe ? <CheckboxActive /> : <CheckboxNonActive />}
              <span>Lembrar-me</span>
            </div>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </LoginFormRow>
          <DefaultButton active fullsize loading={loading}>
            ENTRAR
          </DefaultButton>
        </LoginForm>
      </LoginContent>
      <ImgContainer>
        <LoginBackground src={backgroundWolf} />
      </ImgContainer>
    </LoginContainer>
  );
}

export default Login;
