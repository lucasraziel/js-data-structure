import React from 'react';
import AnimationContract from './AnimationContract';
import MenuQueue from '../components/MenuQueue';

class QueueAnimation implements AnimationContract {
  MenuComponent: React.FC;

  text: string;

  constructor() {
    this.MenuComponent = MenuQueue;
    this.text = 'Queue';
  }

  startCanvas(): React.ReactNode {
    return (
      <>
        <text x="10" y="20">
          Start
        </text>

        <path d="m 45 15 H60" stroke="black" strokeWidth="1" />

        <path d="M 55 10 L 60 15 L 55 20" stroke="black" strokeWidth="1" />

        <text x="60" y="50">
          End
        </text>

        <path d="M 75 40 V23" stroke="black" strokeWidth="1" />

        <path d="M 70 28 L 75 23 L 80 28" stroke="black" strokeWidth="1" />

        <text x="60" y="20">
          Null
        </text>
      </>
    );
  }
}

export default new QueueAnimation();
