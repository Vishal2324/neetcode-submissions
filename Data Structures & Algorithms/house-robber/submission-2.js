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
        // const dp = new Array(nums.length + 1).fill(-1);
        const dp = [];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for(let i = 2; i < nums.length; i++){
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }

        return dp[nums.length - 1];

        // return Math.max(
        //     this.calculateRob(nums, 0, dp),
        //     this.calculateRob(nums, 1, dp)
        // )
    }
}
