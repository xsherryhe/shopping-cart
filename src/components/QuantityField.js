import '../styles/QuantityField.css';

export default function QuantityField({ quantity, changeQuantity, input }) {
  function increment(e) {
    e.preventDefault();
    changeQuantity((quantity) => quantity + 1);
  }

  function decrement(e) {
    e.preventDefault();
    changeQuantity((quantity) => Math.max(1, quantity - 1));
  }

  function handleChange(e) {
    changeQuantity(Number(e.target.value));
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
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
