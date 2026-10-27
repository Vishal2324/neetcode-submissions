class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    countStep(n, dp){
        if(n < 0) return 0;
        if(n === 0){
            return 1;
        }
        if(dp[n] !== -1){
            return dp[n];
        }
        return dp[n] = this.countStep(n - 1, dp) + this.countStep(n - 2, dp);
    }

    climbStairs(n) {
        const dp = [];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        for(let i = 3; i <= n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}
