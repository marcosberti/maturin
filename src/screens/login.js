/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useAuth } from '../context/auth-context';
import { Content, Label, Input, Button } from '../components/lib';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import * as mq from '../styles/media-queries';

const FormButton = ({ setCurrentForm, text, form }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      setCurrentForm(form);
    }}
    css={css`
      display: block;
      margin: 1.5rem auto 0;
      border: none;
      background-color: inherit;
      text-transform: uppercase;
      font-size: 0.7rem;
      cursor: pointer;
      outline: none;
      opacity: 0.65;
      transition: opacity 0.25s ease;

      :hover {
        opacity: 1;
      }
    `}
  >
    {text}
  </button>
);

const LoginForm = () => {
  const { login } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    login(e.target.elements.mail.value, e.target.elements.password.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="mail" text="mail" />
      <Input type="email" name="mail" id="mail" placeholder="Email" required />
      <Label htmlFor="password" text="password" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        required
      />
      <Button
        type="submit"
        css={css`
          display: block;
          margin: 0 auto;
        `}
      >
        Iniciar sesion
      </Button>
    </form>
  );
};

const ResetForm = () => {
  const { reset } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    reset(e.target.element.mail.value);
    toast.info('Se envió un mail al correo ingresado');
  };

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="mail" text="mail" />
      <Input type="email" name="mail" id="mail" placeholder="Email" required />
      <Button
        type="submit"
        css={css`
          display: block;
          margin: 0 auto;
        `}
      >
        Restablecer contraseña
      </Button>
    </form>
  );
};

const SignupForm = () => {
  const { register } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.elements.password.value !== e.target.elements.passwordConf.value
    ) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    register(e.target.elements.mail.value, e.target.elements.password.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="mail" text="mail" />
      <Input type="email" name="mail" id="mail" placeholder="Email" required />
      <Label htmlFor="password" text="password" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        required
      />
      <Label htmlFor="passwordConf" text="password" />
      <Input
        type="password"
        name="passwordConf"
        id="passwordConf"
        placeholder="Confirmar contraseña"
        required
      />
      <Button
        type="submit"
        css={css`
          display: block;
          margin: 0 auto;
        `}
      >
        Crear cuenta
      </Button>
    </form>
  );
};

const forms = {
  login: 'login',
  reset: 'reset',
  signup: 'signup',
};

const Login = () => {
  const { user } = useAuth();
  const [currentForm, setCurrentForm] = React.useState(forms.login);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Content>
      <div
        css={css`
          box-shadow: 0px 0px 5px 2px #ccc;
          margin: 2rem auto;
          border-radius: 5px;
          padding: 2rem;

          ${mq.large} {
            width: 500px;
          }
        `}
      >
        {currentForm === forms.login ? (
          <React.Fragment>
            <LoginForm />

            <FormButton
              setCurrentForm={setCurrentForm}
              text="¿Aún no tiene una cuenta?"
              form={forms.signup}
            />
            <FormButton
              setCurrentForm={setCurrentForm}
              text="¿Ha olvidado su contraseña?"
              form={forms.reset}
            />
          </React.Fragment>
        ) : currentForm === forms.reset ? (
          <ResetForm />
        ) : currentForm === forms.signup ? (
          <SignupForm />
        ) : null}
      </div>
    </Content>
  );
};

export default Login;
