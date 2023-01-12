import '../styles/ShopItem.css';

export default function ShopItem({ item: { name, price, img } }) {
  return (
    <div className="item">
      <img src={img} alt="" />
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
  );
}
