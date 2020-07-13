import React, { useState, useCallback } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available) {
        setSelectedDate(day);
      }
    },
    [setSelectedDate],
  );

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

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                11:00
              </span>

              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Avatar"
                />
                <strong>Usuário GoBarber</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                12:00
              </span>

              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Avatar"
                />
                <strong>Usuário GoBarber</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>

              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Avatar"
                />
                <strong>Usuário GoBarber</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                15:00
              </span>

              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Avatar"
                />
                <strong>Usuário GoBarber</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            selectedDays={selectedDate}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
