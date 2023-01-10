import { useRef } from 'react';
import uniqid from 'uniqid';

import ShopItem from './ShopItem';

export default function Shop() {
  const items = useRef(
    [
      { name: 'Monopoly' },
      { name: 'Game of Life' },
      { name: 'Clue' },
      { name: 'Scrabble' },
      { name: 'Playing Cards (Standard Deck)' },
      { name: 'Ticket to Ride' },
      { name: 'Settlers of Catan' },
      { name: 'Apples to Apples' },
      { name: 'Pandemic' },
      { name: 'The Crew' },
      { name: 'Fog of Love' },
      { name: 'Wingspan' },
      { name: 'Dominion' },
      { name: 'Fluxx' },
      { name: 'Between Two Cities' },
    ].map((item) => ({ id: uniqid(), ...item }))
  );

  return (
    <div>
      <h1>The BoardWalk Online Shop</h1>
      <div className="items">
        {items.current.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
