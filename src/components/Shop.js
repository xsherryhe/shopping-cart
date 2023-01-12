import '../styles/Shop.css';

import AddToCartForm from './AddToCartForm';
import ShopItem from './ShopItem';

export default function Shop({ items, addToCart }) {
  return ( 
    <div className="shop">
      <h1>The BoardWalk Online Shop</h1>
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
