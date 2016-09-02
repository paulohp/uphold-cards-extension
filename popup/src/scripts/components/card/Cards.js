import React from 'react';
import Card from './Card';

const Cards = ({cards}) => (
  <div className="col-sm-6 col-md-4">
    {cards.map(card =>
      <Card key={card.id} card={card} />  
    )}
  </div>
);

export default Cards;