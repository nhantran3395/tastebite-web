import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <Router>{children}</Router>;
};

export default AppProvider;
