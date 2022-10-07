const calculateBasketItemAmount = function (basket) {
  let count = 0;
  for (let i = 0; i < basket.length; i++) {
    const el = basket[i];
    count += el.count;
  }
  return count;
};

export default calculateBasketItemAmount;
