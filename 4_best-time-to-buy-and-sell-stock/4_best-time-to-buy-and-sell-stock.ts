// --- 4. Best Time to Buy and Sell Stock --- //
/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

const maxProfit = (prices: number[]): number => {
  const maxProfitArr: number[] = [];
  const loopNum = prices.length;

  for (let i = 0; i < loopNum; i++) {
    const profitArr = prices.map((price) => price - prices[0]);
    maxProfitArr.push(Math.max(...profitArr));
    prices.shift();
  }
  return Math.max(...maxProfitArr);
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
