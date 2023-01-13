import '../styles/ShopItem.css';

export default function ShopItem({ item: { name, price, img } }) {
  return (
    <div className="item">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">${price.toFixed(2)}</div>
      </div>
    </div>
  );
}
