import '../styles/Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

import AddToCartForm from './AddToCartForm';
import ShopItem from './ShopItem';

export default function Shop({ items, addToCart }) {
  return (
    <div className="shop">
      <h1>
        <FontAwesomeIcon icon={faStore} />
        The BoardWalk Online Shop
        <FontAwesomeIcon icon={faStore} />
      </h1>
      <div className="items">
        {items.map((item) => (
          <div key={item.id}>
            <ShopItem item={item} />
            <AddToCartForm id={item.id} onSubmit={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
