import React from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Go Barber" />

          <Profile>
            <img
              src={
                user.avatar_url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Avatar"
            />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 12</span>
            <span>Domingo</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="Avatar"
              />
              <strong>Usuário GoBarber</strong>

              <span>
                <FiClock />
                10:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
