import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>The BoardWalk</h1>
      <h2>Board games everywhere you walk!</h2>
      <Link to="shop">Walk through our online shop</Link>
    </div>
  );
}
