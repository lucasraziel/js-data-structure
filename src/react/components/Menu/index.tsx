import React from 'react';
import { Menu } from './styles';
import { useContext } from '../../hooks';

const MenuComponent: React.FC = () => {
  const { animations, selectAnimation } = useContext();
  return (
    <Menu>
      <details>
        <summary>Data Structures</summary>
        <ul>
          {animations.map(animation => (
            <li key={animation.text}>
              <button onClick={() => selectAnimation(animation)}>{animation.text}</button>
            </li>
          ))}
        </ul>
      </details>
    </Menu>
  );
};

export default MenuComponent;
