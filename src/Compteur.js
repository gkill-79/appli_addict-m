



// src/Compteur.js
import React, { useState } from 'react';

const Compteur = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Compteur</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
    </div>
  );
};

export default Compteur;
















