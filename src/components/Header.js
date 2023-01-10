import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>The BoardWalk</div>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
    </header>
  );
}
