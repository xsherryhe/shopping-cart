export default function QuantityField({ quantity, changeQuantity, inputRef }) {
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

  return (
    <div className="field">
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleChange}
        min="1"
        required
        ref={inputRef}
      />
      <div className="change-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
