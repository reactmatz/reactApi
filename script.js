import React, { useState, useEffect } from 'react';

function App() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obterDados() {
      const response = await fetch('https://api.exemplo.com/dados');
      const data = await response.json();
      setDados(data);
      setLoading(false);
    }

    obterDados();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {dados.map((dado) => (
        <div key={dado.id}>
          <h2>{dado.titulo}</h2>
          <p>{dado.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
