import styled from 'styled-components';
import { colors } from '../../styles/utils';

export const Menu = styled.menu`
  width: 300px;
  display: flex;
  background-color: ${colors.darkGreen};
  margin: 0 15px;
  padding: 5px;

  details {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  details ul {
    display: flex;
    padding: 5px;
    list-style: none;
    background-color: ${colors.gray};
  }

  details ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 100%;
    height: 30px;
  }

  details ul li button {
    background-color: ${colors.darkGreen};
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  details summary {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightGreen};
    padding: 10px;
    cursor: pointer;
    list-style: none;
  }

  details summary::marker,
  details summary::-webkit-details-marker {
    display: none;
  }
`;
