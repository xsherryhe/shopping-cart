import { useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/App.css';
import { totalItems } from './helpers/totals';
import uniqid from 'uniqid';

import monopoly from './images/monopoly.jpg';
import gameOfLife from './images/game-of-life.jpg';
import clue from './images/clue.jpg';
import scrabble from './images/scrabble.jpg';
import playingCards from './images/playing-cards.jpg';
import ticketToRide from './images/ticket-to-ride.jpg';
import settlersOfCatan from './images/settlers-of-catan.jpg';
import applesToApples from './images/apples-to-apples.jpg';
import pandemic from './images/pandemic.jpg';
import theCrew from './images/the-crew.jpg';
import fogOfLove from './images/fog-of-love.png';
import wingspan from './images/wingspan.jpg';
import dominion from './images/dominion.jpg';
import fluxx from './images/fluxx.jpg';
import betweenTwoCities from './images/between-two-cities.png';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const items = useRef(
    [
      { name: 'Monopoly', price: 15.99, img: monopoly },
      { name: 'Game of Life', price: 18.99, img: gameOfLife },
      { name: 'Clue', price: 11.99, img: clue },
      { name: 'Scrabble', price: 19.99, img: scrabble },
      { name: 'Playing Cards (Standard Deck)', price: 4.99, img: playingCards },
      { name: 'Ticket to Ride', price: 24.99, img: ticketToRide },
      { name: 'Settlers of Catan', price: 29.99, img: settlersOfCatan },
      { name: 'Apples to Apples', price: 12.99, img: applesToApples },
      { name: 'Pandemic', price: 45.99, img: pandemic },
      { name: 'The Crew: Quest for Planet Nine', price: 14.99, img: theCrew },
      { name: 'Fog of Love', price: 49.99, img: fogOfLove },
      { name: 'Wingspan', price: 39.99, img: wingspan },
      { name: 'Dominion', price: 42.99, img: dominion },
      { name: 'Fluxx', price: 18.99, img: fluxx },
      { name: 'Between Two Cities', price: 30.99, img: betweenTwoCities },
    ].map((item) => ({ id: uniqid(), ...item }))
  );

  function addToCart(itemId, quantity) {
    setCart((cart) => {
      const cartItemIndex = cart.findIndex(({ id }) => id === itemId);
      const item =
        cart[cartItemIndex] || items.current.find(({ id }) => id === itemId);
      const newCart =
        cartItemIndex < 0
          ? [...cart]
          : [...cart.slice(0, cartItemIndex), ...cart.slice(cartItemIndex + 1)];

      return [
        ...newCart,
        { ...item, quantity: (item.quantity || 0) + quantity },
      ];
    });
  }

  function changeCartQuantity(itemId, quantity) {
    setCart((cart) => {
      const cartItemIndex = cart.findIndex(({ id }) => id === itemId);
      const item = cart[cartItemIndex];
      return [
        ...cart.slice(0, cartItemIndex),
        ...cart.slice(cartItemIndex + 1),
        { ...item, quantity },
      ];
    });
  }

  function deleteFromCart(itemId) {
    setCart((cart) => {
      const cartItemIndex = cart.findIndex(({ id }) => id === itemId);
      return [
        ...cart.slice(0, cartItemIndex),
        ...cart.slice(cartItemIndex + 1),
      ];
    });
  }

  const path = useLocation().pathname;
  return (
    <div className={`App ${path === '/' ? 'homepage' : ''}`}>
      <Header cartTotal={totalItems(cart)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="shop"
            element={<Shop items={items.current} addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                changeCartQuantity={changeCartQuantity}
                deleteFromCart={deleteFromCart}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
