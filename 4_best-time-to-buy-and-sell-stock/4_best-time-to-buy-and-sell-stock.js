"use strict";
// --- 4. Best Time to Buy and Sell Stock --- //
/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/
var maxProfit = function (prices) {
    var maxProfitArr = [];
    var loopNum = prices.length;
    for (var i = 0; i < loopNum; i++) {
        var profitArr = prices.map(function (price) { return price - prices[0]; });
        maxProfitArr.push(Math.max.apply(Math, profitArr));
        prices.shift();
    }
    return Math.max.apply(Math, maxProfitArr);
};
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
