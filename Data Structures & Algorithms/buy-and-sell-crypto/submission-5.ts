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
            const profit = prices[i] - prices[min];
            if (profit < 0) {
                min = i;
            } else {
                maxProfit = Math.max(profit, maxProfit);
            }
        }

        return maxProfit;
    }
}
