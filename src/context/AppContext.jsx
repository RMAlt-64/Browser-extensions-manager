import { createContext, useContext, useState } from 'react';
import data from '../data/data.json';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [filter, setFilter] = useState("All");
  const [extensions, setExtensions] = useState(data);
  const [loading, setLoading] = useState(false);

  const value = {
    
    filter,
    extensions,
    loading,
    
    
    setFilter,
    setExtensions,
    setLoading,
    
    
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};
