import '../styles/Cart.css';
import { totalPrice } from '../helpers/totals';

import CartItem from './CartItem';

export default function Cart({
  cart = [],
  changeCartQuantity,
  deleteFromCart,
}) {
  return (
    <div className="cart">
      <div className="container">
        <h1>My Cart</h1>
        <table className="cart-display">
          <thead>
            <tr>
              <td></td>
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
                  key={item.id}
                  item={item}
                  onChangeQuantity={changeCartQuantity}
                  onDelete={deleteFromCart}
                />
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <th>Total</th>
              <td></td>
              <td>${totalPrice(cart)}</td>
            </tr>
          </tfoot>
        </table>
        <button className="check-out">Check Out</button>
      </div>
    </div>
  );
}
