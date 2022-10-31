const calculateBasketItemAmount = function (items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const el = items[i];
    total += el.price * el.count;
  }
  return total;
};

export default calculateBasketItemAmount;
