import styled from 'styled-components';
import { colors } from '../../styles/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  div {
    width: 160px;
    background-color: ${colors.darkGreen};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2px 0;
    margin-right: 10px;
    input {
      width: 70px;
    }

    button {
      width: 70px;
      background-color: ${colors.darkGreen};
    }
  }

  button {
    width: 70px;
    background-color: ${colors.darkGreen};
  }
`;
