export function totalItems(cart) {
  return Object.values(cart).reduce(
    (total, { quantity }) => total + quantity,
    0
  );
}

export function itemTotalPrice({ quantity, price }) {
  return quantity * price;
}

export function totalPrice(cart) {
  return Object.values(cart).reduce(
    (total, item) => total + itemTotalPrice(item),
    0
  );
}
