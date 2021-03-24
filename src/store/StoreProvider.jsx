import React, { createContext, useState } from 'react';
export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [newsLimit, setNewsLimit] = useState(3)

    return ( 
        <StoreContext.Provider
        value={{
            isMenuOpen,
            setIsMenuOpen,
            newsLimit, 
            setNewsLimit
        }}
        >
            {children}
        </StoreContext.Provider>
     );
}
 
export default StoreProvider;