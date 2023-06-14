export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

Give me the solution in Typescript

 */

/*   Explanation:
  
  We initialize minPrice variable with Infinity and maxProfit variable with 0.

  We iterate through the prices array, starting from the first day.

  If the current price is lower than the minimum price we have seen so far (minPrice), we update minPrice to the current price.

  If the difference between the current price and minPrice is greater than the current maxProfit, we update maxProfit to the new higher value.

  At the end of the loop, we return the maxProfit.

  This solution has a time complexity of O(n), where n is the length of the prices array, since we iterate through the array only once.
  
   */
