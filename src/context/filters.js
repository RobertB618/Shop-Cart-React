import { createContext } from "react";


export const FiltersContext = createContext()


// provider para el contexto

export const FiltersProvider = ({ children }) => {
  return (
    <FiltersContext.Provider value={{
        category: 'all',
        minPrice: 0,
    }}>

        {children}
        
    </FiltersContext.Provider>
  );
};