import React, { useEffect, useState } from 'react';
import ClubItem from './ClubItem';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        const clubsArray = Object.values(data);
        setClubs(clubsArray);
      })
      .catch(error => console.error('Erro ao buscar clubes:', error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredClubs = clubs.filter(club =>
    club.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      <input
        type="text"
        placeholder="Buscar por clube..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: '100%', maxWidth: '400px', padding: '10px', marginBottom: '20px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {filteredClubs.map(club => (
        <ClubItem key={club.id} club={{ nome: club.nome, apelido: club.apelido, escudo_url: club.escudos['60x60'] }} />
      ))}
    </div>
  );
};

export default ClubList;
