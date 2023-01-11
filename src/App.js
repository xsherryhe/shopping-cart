import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { totalItems } from './helpers/totals';
import uniqid from 'uniqid';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState({});
  const items = useRef(
    [
      { name: 'Monopoly', price: 15.99 },
      { name: 'Game of Life', price: 18.99 },
      { name: 'Clue', price: 11.99 },
      { name: 'Scrabble', price: 19.99 },
      { name: 'Playing Cards (Standard Deck)', price: 4.99 },
      { name: 'Ticket to Ride', price: 24.99 },
      { name: 'Settlers of Catan', price: 29.99 },
      { name: 'Apples to Apples', price: 12.99 },
      { name: 'Pandemic', price: 45.99 },
      { name: 'The Crew', price: 14.99 },
      { name: 'Fog of Love', price: 49.99 },
      { name: 'Wingspan', price: 39.99 },
      { name: 'Dominion', price: 42.99 },
      { name: 'Fluxx', price: 18.99 },
      { name: 'Between Two Cities', price: 30.99 },
    ].map((item) => ({ id: uniqid(), ...item }))
  );

  function addToCart(itemId, quantity) {
    const item = cart[itemId] || items.current.find(({ id }) => id === itemId);
    setCart((cart) => ({
      ...cart,
      [itemId]: { ...item, quantity: (item.quantity || 0) + quantity },
    }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartTotal={totalItems(cart)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="shop"
              element={<Shop items={items.current} addToCart={addToCart} />}
            />
            <Route path="cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
