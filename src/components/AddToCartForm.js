import { useRef, useState } from 'react';
import '../styles/AddToCartForm.css';

export default function BuyForm({ id, onSubmit }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const input = useRef();

  function increment(e) {
    e.preventDefault();
    setMessage('');
    setQuantity((quantity) => quantity + 1);
  }

  function decrement(e) {
    e.preventDefault();
    setMessage('');
    setQuantity((quantity) => Math.max(1, quantity - 1));
  }

  function handleChange(e) {
    setMessage('');
    setQuantity(e.target.value);
  }

  function validate() {
    input.current.checkValidity();
    setError(input.current.validationMessage);
    return input.current.validity.valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(id, quantity);
    setMessage('Added to cart!');
  }

  return (
    <form className="add-to-cart" noValidate onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={handleChange}
          min="1"
          required
          ref={input}
        />
        <div className="change-buttons">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
      {message && <div className="message">{message}</div>}
      {error && <div className="error">{error}</div>}
      <button type="submit">Add to Cart</button>
    </form>
  );
}
