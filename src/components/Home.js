import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>The BoardWalk</h1>
        <h2>Board games everywhere you walk!</h2>
        <div className="info">
          <div className="address">
            <h3>Our Address</h3>
            <p>123 Happy Games Lane</p>
            <p>World, Universe 12345</p>
          </div>
          <div className="hours">
            <h3>Our Hours</h3>
            <p>Tuesday - Friday 12pm - 9pm</p>
            <p>Saturday - Sunday 10am - 10pm</p>
          </div>
        </div>
        <Link to="shop">Walk Through Our Online Shop</Link>
      </div>
    </div>
  );
}
