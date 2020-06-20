import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logImg} alt="Go Barber"/>

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail"/>
        <input type="password" placeholder="Senha"/>

        <button type="submit">Entrar</button>

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