import React from 'react';
import classNames  from 'classnames';

const header = (label) => (
  <header>
    <div className="card-title">{label}</div>
  </header>
);
const footer = (card) => (
  <footer>
    <div className="card-available">
      <span>
        <span className="uphold-currency">
          <span className="uphold-currency-value">{card.available}</span>
          <span className="uphold-currency-code">{card.currency}</span>
        </span>
      </span>
    </div>
  </footer>
);
const star = (card) => (
  <button className="label">
    <icon name="star" size="sm">⭐️</icon>
    {card.currency}
  </button>
);
const Card = ({card}) => (
  <div className={`card card--${card.currency.toLowerCase()} card--artwork card--default`}>
    {card.settings.starred && star(card)}
    <div className="card-inner">
      {header(card.label)}
      {footer(card)}
    </div>
  </div>

);

export default Card;
