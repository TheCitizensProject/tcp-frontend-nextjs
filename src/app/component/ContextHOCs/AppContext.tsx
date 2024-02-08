"use client";
import { AppContextDataType, RIOCAlert } from '@/app/utils/global-types';
import React, { 
  ReactElement, 
  ReactNode, 
  createContext, 
  useContext, 
  useState 
} from 'react';
import config from '../../../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
Amplify.configure(config);

type AppContextType = {
  getRiocAlerts: () => RIOCAlert[];
  setRiocAlerts: (_: RIOCAlert[]) => void;
}

const appContextDefaults: AppContextType = {
  getRiocAlerts: () => [],
  setRiocAlerts: (_: RIOCAlert[]) => null,
};

const AppContext = createContext<AppContextType>(appContextDefaults);

export function useAppCtx() {
  return useContext(AppContext);
}

type AppContextHOCProps = {
  children: ReactElement[] | ReactElement | ReactNode;
  appData: AppContextDataType;
}
export function AppContextHOC({
  children,
  appData
}: AppContextHOCProps) {
  const RiocItems: RIOCAlert[] = appData.alerts || [];
  
  const [_riocAlerts, _setRiocAlerts] = useState<RIOCAlert[]>(RiocItems);

  const getRiocAlerts = () => _riocAlerts;
  const setRiocAlerts = (items: RIOCAlert[]) => _setRiocAlerts(items);
  
  const ctx = {
    getRiocAlerts,
    setRiocAlerts,
  };

  return (
    <AppContext.Provider value={ctx}>
      {children}
    </AppContext.Provider>
  );
}