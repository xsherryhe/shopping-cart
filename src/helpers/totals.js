export function totalItems(cart) {
  return cart.reduce((total, { quantity }) => total + quantity, 0);
}

export function itemTotalPrice({ quantity, price }) {
  return (quantity * price).toFixed(2);
}

export function totalPrice(cart) {
  return cart
    .reduce((total, item) => total + Number(itemTotalPrice(item)), 0)
    .toFixed(2);
}
