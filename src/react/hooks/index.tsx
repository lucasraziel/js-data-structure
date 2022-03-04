import React, { createContext, useContext as useContextHook, useState, useCallback } from 'react';

import AnimationContract from '../animation/AnimationContract';

import QueueAnimation from '../animation/QueueAnimation';

interface ContextData {
  selectedAnimation: AnimationContract | null;
  animations: AnimationContract[];
  // eslint-disable-next-line no-unused-vars
  selectAnimation: (animation?: AnimationContract) => void;
}

const Context = createContext<ContextData>({} as ContextData);

export const ContextProvider: React.FC = ({ children }) => {
  const [selectedAnimation, setSelectedAnimation] = useState<null | AnimationContract>(null);
  const animations: AnimationContract[] = [QueueAnimation];

  const selectAnimation = useCallback((animation?: AnimationContract) => {
    if (animation) {
      setSelectedAnimation(animation);
      return;
    }
    setSelectedAnimation(null);
  }, []);

  return (
    <Context.Provider
      value={{
        selectedAnimation,
        animations,
        selectAnimation,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useContext() {
  const context = useContextHook(Context);

  if (!context) {
    throw new Error('useContext must be used within a ContextProvider');
  }

  return context;
}
