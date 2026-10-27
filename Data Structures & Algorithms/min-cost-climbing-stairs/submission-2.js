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
        // const dp = new Array(cost.length + 1).fill(-1);
        const dp = [];
        const n = cost.length;
        dp[0] = cost[0];
        dp[1] = cost[1];
        for(let i = 2; i < n; i++){
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }
        console.log("dp", dp);
        return Math.min(dp[n - 1], dp[n - 2]);
    }
}
