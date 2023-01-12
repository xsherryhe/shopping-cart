import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header({ cartTotal }) {
  return (
    <header>
      <h1>
        <Link to="/">The BoardWalk</Link>
      </h1>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart ({cartTotal}) </Link>
    </header>
  );
}
