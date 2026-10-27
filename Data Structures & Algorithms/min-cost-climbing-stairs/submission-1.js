class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */

    calculateCost(cost, n, dp){
        if(n >= cost.length) return 0;
        if(dp[n] !== -1) return dp[n];
        return dp[n] = cost[n] + Math.min(
            this.calculateCost(cost, n + 1, dp),
            this.calculateCost(cost, n + 2, dp)
        );
    }

    minCostClimbingStairs(cost) {
        const dp = new Array(cost.length + 1).fill(-1);
        return Math.min(
            this.calculateCost(cost, 0, dp),
            this.calculateCost(cost, 1, dp)
        );
    }
}
