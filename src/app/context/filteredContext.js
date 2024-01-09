'use client';
import { createContext, useContext, useState, useMemo } from "react";
const FilteredContext = createContext({})

export const FilteredContextProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState([]);
    const contextValue = useMemo(() => ({ filteredData, setFilteredData }), [filteredData, setFilteredData]);
    return (
        <FilteredContext.Provider value={contextValue}>
            {children}
        </FilteredContext.Provider>
    )
};

export const useFilteredContext = () => useContext(FilteredContext);