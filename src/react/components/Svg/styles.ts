import styled from 'styled-components';
import { colors } from '../../styles/utils';

export const ContainerSvg = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  @media (max-width: 1300px) {
    padding-bottom: 100%;
  }
  vertical-align: middle;
  background-color: ${colors.gray};
  overflow: hidden;
  svg {
    position: absolute;
    display: inline-block;
    background-color: ${colors.white};

    top: 0;
    left: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.gray};
  height: 100%;
`;
