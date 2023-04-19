

// src/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (credentials) => {
    // Vérification des informations d'identification auprès de votre API
    if (credentials.username === 'monusername' && credentials.password === 'monmotdepasse') {
      setIsAuthenticated(true);
    } else {
      alert('Identifiants incorrects');
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};






















