const formatCurrency = (amount) => {
  if (amount < 0) {
    return `-$${Math.abs(amount).toFixed(2)}`;
  }
  return `$${amount.toFixed(2)}`;
};

const getCoins = (cents) => {
  const quarters = Math.floor(cents / 25);
  cents %= 25;

  const dimes = Math.floor(cents / 10);
  cents %= 10;

  const nickels = Math.floor(cents / 5);
  cents %= 5;

  const pennies = cents;

  return {
    quarters,
    dimes,
    nickels,
    pennies,
  };
};

module.exports = { formatCurrency, getCoins };
