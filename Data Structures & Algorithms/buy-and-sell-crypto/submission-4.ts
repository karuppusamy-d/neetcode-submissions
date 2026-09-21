class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n = prices.length;
        
        let min = 0;
        let maxProfit = 0;

        for (let i = 1; i < n; i++) {
            if (prices[i] < prices[min]) {
                min = i;
            } else {
                maxProfit = Math.max(prices[i] - prices[min], maxProfit);
            }
        }

        return maxProfit;
    }
}
