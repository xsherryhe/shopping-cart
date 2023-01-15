import '../styles/CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { itemTotalPrice } from '../helpers/totals';

import QuantityField from './QuantityField';

export default function CartItem({
  item: { id, name, quantity, price, img },
  onChangeQuantity,
  onDelete,
}) {
  function changeQuantity(val) {
    if (val < 1) return;

    const newQuantity = typeof val === 'function' ? val(quantity) : val;
    onChangeQuantity(id, newQuantity);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <tr className="item">
      <td className="image">
        <img src={img} alt="" />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        <QuantityField
          quantity={quantity}
          changeQuantity={changeQuantity}
          input={false}
        />
      </td>
      <td className="price">${itemTotalPrice({ quantity, price })}</td>
      <td>
        <button
          className="delete icon"
          aria-label="remove"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrashCan} alt="remove" />
        </button>
      </td>
    </tr>
  );
}
