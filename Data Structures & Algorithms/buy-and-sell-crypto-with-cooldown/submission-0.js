class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    calulate(prices, n, canBuy){
        if(n >= prices.length) return 0;
        if(canBuy){
            return Math.max(
                -prices[n] + this.calulate(prices, n + 1, false), // buy
                this.calulate(prices, n + 1, true) // not buy
            )
        } else {
            return Math.max(
                prices[n] + this.calulate(prices, n + 2, true), //sold
                this.calulate(prices, n + 1, false)
            )
        }
    }

    maxProfit(prices) {
        return this.calulate(prices, 0, true)
    }
}
