

// src/components/Main.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Conseils from './Conseils';
import Compteur from './Compteur';

const Main = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main>
      {isAuthenticated ? (
        <>
          {children}
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/compteur" element={<Compteur />} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};

export default Main;



















