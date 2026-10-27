class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    calculatePrize(nums, n, l, dp){
        if(n > l) return 0;
        if(dp[n] !== -1) return dp[n];
        return dp[n] = Math.max(
            nums[n] + this.calculatePrize(nums, n+2, l, dp),
            this.calculatePrize(nums, n+1, l, dp)
        )
    }

    rob(nums) {
        if(nums.length === 1) return nums[0];
        const dp1 = new Array(nums.length).fill(-1);
        const dp2 = new Array(nums.length).fill(-1);
        return Math.max(
            this.calculatePrize(nums, 0, nums.length - 2, dp1),
            this.calculatePrize(nums, 1, nums.length - 1, dp2)
        )
    }
}
