class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minLeft = prices[0];
        let maxProfit = 0;
        let i = 1;
        while(i<prices.length){
            if(prices[i] < minLeft){
                minLeft = prices[i];
            } else {
                maxProfit = Math.max(maxProfit, prices[i] - minLeft);
            }
            i++;
        }
        return maxProfit;
    }
}
