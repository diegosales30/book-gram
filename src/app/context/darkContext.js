'use client';
import { createContext, useContext, useState, useMemo } from "react";
const DarkContext = createContext({})

export const DarkContextProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const contextValue = useMemo(() => ({ dark, setDark }), [dark, setDark]);
    return (
        <DarkContext.Provider value={contextValue}>
            {children}
        </DarkContext.Provider>
    )
};

export const useDarkContext = () => useContext(DarkContext);