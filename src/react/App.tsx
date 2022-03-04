import React from 'react';
import Menu from './components/Menu';
import ContentMenu from './components/ContentMenu';
import Svg from './components/Svg';
import { ContextProvider } from './hooks';

const App: React.FC = () => (
  <ContextProvider>
    <Menu />
    <section id="content">
      <ContentMenu />
      <Svg />
    </section>
  </ContextProvider>
);

export default App;
