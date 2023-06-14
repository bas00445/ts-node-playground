export function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  // Iterate through the prices array
  for (let i = 1; i < prices.length; i++) {
    // If the current price is higher than the previous price, we can make a profit
    if (prices[i] > prices[i - 1]) {
      // Add the difference between the current and previous prices to the maxProfit
      const currentProfit = prices[i] - prices[i - 1];
      maxProfit += currentProfit;
    }
  }

  return maxProfit;
}
