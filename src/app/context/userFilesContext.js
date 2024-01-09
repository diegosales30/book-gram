'use client';
import { createContext, useContext, useState, useMemo } from "react";
const UserFilesContext = createContext({})

export const UserFilesContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const contextValue = useMemo(() => ({ userData, setUserData }), [userData, setUserData]);
    return (
        <UserFilesContext.Provider value={contextValue}>
            {children}
        </UserFilesContext.Provider>
    )
};

export const useUserFilesContext = () => useContext(UserFilesContext);