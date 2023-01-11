import { itemTotalPrice } from '../helpers/totals';

export default function CartItem({
  item: { id, name, quantity, price },
  onDelete,
}) {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <tr>
      <td className="name">{name}</td>
      <td className="quantity">{quantity}</td>
      <td className="price">${itemTotalPrice({ quantity, price })}</td>
      <td>
        <button onClick={handleDelete}>Remove</button>
      </td>
    </tr>
  );
}
