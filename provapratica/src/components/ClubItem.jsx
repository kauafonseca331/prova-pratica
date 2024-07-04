import React from 'react';

const ClubItem = ({ club }) => {
  return (
    <div style={styles.clubItem}>
      <img src={club.escudo_url} alt={club.nome} style={styles.clubImage} />
      <h2>{club.nome}</h2>
      <p>{club.apelido}</p>
    </div>
  );
};

const styles = {
  clubItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    margin: '10px'
  },
  clubImage: {
    width: '100px',
    height: '100px'
  }
};

export default ClubItem;
