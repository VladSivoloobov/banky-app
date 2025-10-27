export const formatBalance = (balance: number): string => {
  return balance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatAmount = (amount: number): string => {
  const isPositive = amount > 0;
  const formattedValue = Math.abs(amount).toFixed(2);
  return `${isPositive ? '+' : '-'}$${formattedValue}`;
};

export const formatNotificationDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};
