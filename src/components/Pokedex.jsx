import React from 'react';
import Card from './Card';
import cards from './cards';

function Deck() {
  return(
    <div className="deck">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          type={card.type}
          base_experience={card.base_experience}
          imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
/>
          ))}
    </div>
  );
}

export default Deck;
