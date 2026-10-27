class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a-b);
        let counter = 1;
        let max = 0;
        let i = 0;
        while(i < nums.length){
            if(nums[i+1] - nums[i] === 1){
                counter++;
                i++;
            } else if(nums[i+1] === nums[i]){
                i++;
            } else {
                max = Math.max(max, counter);
                counter = 1;
                i++;
            }
        }
        return max;
    }
}
