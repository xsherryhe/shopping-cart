import '../styles/Cart.css';
import { totalPrice } from '../helpers/totals';

import CartItem from './CartItem';

export default function Cart({ cart, changeCartQuantity, deleteFromCart }) {
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
          {cart
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <CartItem
                item={item}
                onChangeQuantity={changeCartQuantity}
                onDelete={deleteFromCart}
              />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td></td>
            <td>${totalPrice(cart)}</td>
          </tr>
        </tfoot>
      </table>
      <button>Check Out</button>
    </div>
  );
}
