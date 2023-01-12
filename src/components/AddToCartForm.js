import { useRef, useState } from 'react';
import '../styles/AddToCartForm.css';
import QuantityField from './QuantityField';

export default function AddToCartForm({ id, onSubmit }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const input = useRef();

  function changeQuantity(quantity) {
    setMessage('');
    setQuantity(quantity);
  }

  function validate() {
    input.current.checkValidity();
    setError(input.current.validationMessage);
    return input.current.validity.valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(id, Number(quantity));
    setMessage('Added to cart!');
  }

  return (
    <form className="add-to-cart" noValidate onSubmit={handleSubmit}>
      <QuantityField
        quantity={quantity}
        changeQuantity={changeQuantity}
        input={input}
      />
      {message && <div className="message">{message}</div>}
      {error && (
        <div className="error" data-testid="error">
          {error}
        </div>
      )}
      <button type="submit">Add to Cart</button>
    </form>
  );
}
