"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
const StorageContext = createContext({});

export const StorageContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const route = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    if(token){
      route.push('/dashboard');
    } else if(!token) {
      route.push('/');
    }
    
  }, []);

  const contextValue = useMemo(() => ({ token, setToken }), [token, setToken]);
  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorageContext = () => useContext(StorageContext);
