import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [foo] = useState('bar');

  return ( 
    <AppContext.Provider value={ foo }>
      {props.children}
    </AppContext.Provider>
   );

}

export default AppContextProvider;