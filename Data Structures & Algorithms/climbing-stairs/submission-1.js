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
        const dp = new Array(n+1).fill(-1);
        return this.countStep(n, dp);
    }
}
