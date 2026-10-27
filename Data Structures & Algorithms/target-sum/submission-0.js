class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    calculate(nums, target, n, sum){
        if(sum === target && n === nums.length) return 1;
        if(n >= nums.length) return 0;
        const add = this.calculate(nums, target, n + 1, sum + nums[n]);
        const subtract = this.calculate(nums, target, n + 1, sum - nums[n]);
        return add + subtract;
    }

    findTargetSumWays(nums, target) {
        return this.calculate(nums, target, 0, 0);
    }
}
