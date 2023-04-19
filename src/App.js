// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Signup from './Signup';
import Conseils from './Conseils';
import Compteur from './Compteur';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/conseils" element={<Conseils />} />
              <Route path="/compteur" element={<Compteur />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;



