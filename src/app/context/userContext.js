'use client';
import { createContext, useContext, useState, useMemo } from "react";
const DataContext = createContext({})

export const DataContextProvider = ({ children }) => {
    const [changeIndicator, setChangeIndicator] = useState(false);
    const contextValue = useMemo(() => ({ changeIndicator, setChangeIndicator }), [changeIndicator, setChangeIndicator]);
    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
};

export const useDataContext = () => useContext(DataContext);