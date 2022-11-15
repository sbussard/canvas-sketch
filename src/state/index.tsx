import React, { createContext, useContext } from 'react';
import useAppStateManager from 'src/state/manager';

type AppState = ReturnType<typeof useAppStateManager>;
const context = createContext<AppState>({
  initialized: false
} as AppState);

export const AppStateProvider = ({ children }: { children: Children }) => {
  const value = useAppStateManager.bind(true)();
  return <context.Provider value={value} children={children} />;
};

export default function useAppState() {
  const value = useContext(context);

  if (!value) {
    throw new Error('useAppState cannot run outside of its Provider');
  }

  return value;
}
