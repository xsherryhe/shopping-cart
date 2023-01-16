import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { totalPrice } from '../helpers/totals';

import gifts from '../images/gifts.jpg';

import CartItem from './CartItem';

export default function Cart({
  cart = [],
  changeCartQuantity,
  deleteFromCart,
}) {
  const cartTable = (
    <table>
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
  );

  return (
    <div className="cart">
      <div className="container">
        <img src={gifts} alt="" />
        <div className="content">
          <h1>
            <FontAwesomeIcon icon={faCartShopping} />
            My Cart
          </h1>
          {cart.length ? (
            cartTable
          ) : (
            <div className="empty">Your cart is empty!</div>
          )}
          <button className="check-out">Check Out</button>
        </div>
      </div>
    </div>
  );
}
