import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #321e38;
  margin-top: 16px;
  width: 100%;
  font-weight: 500px;
  transition: background-color 0.2;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
