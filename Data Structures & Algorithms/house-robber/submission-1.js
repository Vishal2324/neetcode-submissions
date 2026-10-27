class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    calculateRob(nums, n, dp){
        if(n >= nums.length) return 0;
        if(dp[n] !== -1) return dp[n];
        return dp[n] = Math.max(
            nums[n] + this.calculateRob(nums, n + 2, dp),
            this.calculateRob(nums, n + 1, dp)
        )
    }

    rob(nums) {
        const dp = new Array(nums.length + 1).fill(-1);
        return Math.max(
            this.calculateRob(nums, 0, dp),
            this.calculateRob(nums, 1, dp)
        )
    }
}
