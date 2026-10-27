class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    calculate(nums, target, n, sum, dp){
        if(sum === target && n === nums.length) return 1;
        if(n >= nums.length) return 0;
        if(dp.hasOwnProperty(n) && dp[n].hasOwnProperty(sum)) return dp[n][sum];
        dp[n] = dp[n] || {};
        const add = this.calculate(nums, target, n + 1, sum + nums[n], dp);
        const subtract = this.calculate(nums, target, n + 1, sum - nums[n], dp);
        return dp[n][sum] = add + subtract;
    }

    findTargetSumWays(nums, target) {
        const dp = {};
        return this.calculate(nums, target, 0, 0, dp);
    }
}
