export default function ShopItem({ item: { name, price } }) {
  return (
    <div>
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
  );
}
