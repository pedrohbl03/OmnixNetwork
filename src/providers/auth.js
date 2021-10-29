import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

  const [userLocation, setLocation] = useState({
    cep: '',
    street: '',
    region: '',
    city: '',
    cep_error: '',
  })

  return (
    <AuthContext.Provider value={{ userLocation, setLocation }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useLocale = () => React.useContext(AuthContext)

