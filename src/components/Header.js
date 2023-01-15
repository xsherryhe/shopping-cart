import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header({ cartTotal = 0 }) {
  return (
    <header>
      <h1>
        <Link to="/">The BoardWalk</Link>
      </h1>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link className="cart-link" to="cart">
        <span className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} alt="cart" />
          <span>{cartTotal}</span>
        </span>
        <span>Cart</span>
      </Link>
    </header>
  );
}
