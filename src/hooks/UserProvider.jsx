import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: '', filiere: '', status: 0 });

  const setStudents = (data) => { // Définissez la fonction setStudents
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setStudents }}> {/* Incluez setStudents dans la valeur du contexte */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
