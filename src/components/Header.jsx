// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Login from '../Login';

const Header = () => {
  const { isAuthenticated, signOut } = useContext(AuthContext);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <header>
      <div className="header-left">
        {/* Votre logo et autres éléments à gauche */}
      </div>
      <div className="header-right">
        {isAuthenticated ? (
          <>
            <Link to="/">Accueil</Link>
            <Link to="/conseils">Conseils</Link>
            <Link to="/compteur">Compteur</Link>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Déconnexion
            </Link>
          </>
        ) : (
          <>
            <Link to="#" onClick={toggleLoginForm}>
              Connexion
            </Link>
            <Link to="/signup">Inscription</Link>
          </>
        )}
      </div>
      {showLoginForm && <Login />}
    </header>
  );
};

export default Header;




















