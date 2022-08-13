export const subTotal = (cart, discount) => {
  return (
    cart.reduce((acc, cur) => {
      return acc + cur.count * Number(cur.price.slice(1));
    }, 0) *
    (1 - discount)
  );
};
