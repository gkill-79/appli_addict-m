


// src/components/Compteur.js
// import React, { useState } from 'react';

// const Compteur = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Compteur</h2>
//       <p>Compte actuel: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Incrémenter</button>
//       <button onClick={() => setCount(count - 1)}>Décrémenter</button>
//     </div>
//   );
// };

// export default Compteur;



import React, { useState } from 'react';

const Compteur = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
    </div>
  );
};

export default Compteur;














