class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    calulate(prices, n, canBuy, dp){
        if(n >= prices.length) return 0;
        if(dp[n][canBuy] !== -1) return dp[n][canBuy];
        if(canBuy){
            return dp[n][canBuy] = Math.max(
                -prices[n] + this.calulate(prices, n + 1, 0, dp), // buy
                this.calulate(prices, n + 1, 1, dp) // not buy
            )
        } else {
            return dp[n][canBuy] = Math.max(
                prices[n] + this.calulate(prices, n + 2, 1, dp), //sold
                this.calulate(prices, n + 1, 0, dp)
            )
        }
    }

    maxProfit(prices) {
        const dp = Array.from({ length: prices.length + 1 }, () => [-1, -1])
        return this.calulate(prices, 0, 1, dp)
    }
}
