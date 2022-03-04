import React from 'react';
import { useContext } from '../../hooks';
import { ContainerSvg, Container } from './styles';

const Canvas: React.FC = () => {
  const { selectedAnimation } = useContext();

  if (!selectedAnimation) {
    return <Container />;
  }

  return (
    <ContainerSvg>
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {selectedAnimation.startCanvas()}
      </svg>
    </ContainerSvg>
  );
};

export default Canvas;
