'use client';
import { createContext, useContext, useState, useMemo } from "react";
const LoggedContext = createContext({})

export const LoggedContextProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const contextValue = useMemo(() => ({ logged, setLogged }), [logged, setLogged]);
    return (
        <LoggedContext.Provider value={contextValue}>
            {children}
        </LoggedContext.Provider>
    )
};

export const useLoggedContext = () => useContext(LoggedContext);