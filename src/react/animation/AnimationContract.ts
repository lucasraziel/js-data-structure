import React from 'react';

export default interface AnimationContract {
  MenuComponent: React.FC;
  text: string;
  startCanvas: () => React.ReactNode;
}
