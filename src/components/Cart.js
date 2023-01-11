import '../styles/Cart.css';
import { totalPrice } from '../helpers/totals';

import CartItem from './CartItem';

export default function Cart({ cart }) {
  return (
    <div>
      <h1>My Cart</h1>
      <table className="cart">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cart).map((item) => (
            <CartItem item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <tr></tr>
            <tr>${totalPrice(cart)}</tr>
          </tr>
        </tfoot>
      </table>
      <button>Check Out</button>
    </div>
  );
}
