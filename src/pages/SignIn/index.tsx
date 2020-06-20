import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logImg} alt="Go Barber"/>

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail"/>
        <Input name="password" type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="create">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
)

export default SignIn;