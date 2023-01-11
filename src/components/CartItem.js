import { itemTotalPrice } from '../helpers/totals';

export default function CartItem({ item: { name, quantity, price } }) {
  return (
    <tr>
      <td className="name">{name}</td>
      <td className="quantity">{quantity}</td>
      <td className="price">${itemTotalPrice({ quantity, price })}</td>
    </tr>
  );
}
