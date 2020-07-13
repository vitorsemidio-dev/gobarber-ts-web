import React from 'react';
import { FiPower } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Go Barber" />
        </HeaderContent>

        <Profile>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Avatar"
          />

          <div>
            <span>Bem-vindo,</span>
            <strong>Usuário GoBarber</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />;
        </button>
      </Header>
    </Container>
  );
};

export default Dashboard;
