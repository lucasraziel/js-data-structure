import React from 'react';
import { useContext } from '../../hooks/index';
import { Container } from './styles';

const ContentMenu: React.FC = () => {
  const { selectedAnimation } = useContext();

  if (!selectedAnimation) {
    return <></>;
  }

  const { MenuComponent } = selectedAnimation;

  return (
    <Container>
      <MenuComponent />
    </Container>
  );
};

export default ContentMenu;
