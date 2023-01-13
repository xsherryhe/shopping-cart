import '../styles/QuantityField.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function QuantityField({ quantity, changeQuantity, input }) {
  function increment(e) {
    e.preventDefault();
    changeQuantity((quantity) => Number(quantity) + 1);
  }

  function decrement(e) {
    e.preventDefault();
    changeQuantity((quantity) => Math.max(1, quantity - 1));
  }

  function handleChange(e) {
    changeQuantity(e.target.value);
  }

  const quantityDisplay = input ? (
    <input
      className="quantity"
      type="number"
      name="quantity"
      id="quantity"
      value={quantity}
      onChange={handleChange}
      min="1"
      required
      ref={input}
    />
  ) : (
    <div className="quantity">{quantity}</div>
  );

  return (
    <div className="field quantity">
      {quantityDisplay}
      <div className="change-buttons">
        <button className="icon" aria-label="subtract" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} alt="subtract" />
        </button>
        <button className="icon" aria-label="add" onClick={increment}>
          <FontAwesomeIcon icon={faPlus} alt="add" />
        </button>
      </div>
    </div>
  );
}
