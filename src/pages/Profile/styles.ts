import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin: 0 auto;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    /* Position */
    position: absolute;
    right: 0;
    bottom: 0;

    /* Size */
    width: 48px;
    height: 48px;

    /* Styles */
    background: #ff9000;
    border: 0;
    border-radius: 50%;

    /* Flex */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Child */
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    /* Animation */
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
