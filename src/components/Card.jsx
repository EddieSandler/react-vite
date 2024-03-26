import React from 'react';

function Card({ id, name, type, base_experience,imageUrl }) {
  return (
    <div className="card">

      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>exp: {base_experience}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
}


export default Card;