class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = nums[0];
        while (l <= r){
            if(nums[l] < nums[r]){
                min = Math.min(nums[l], min);
                break;
            }
            let m = Math.floor((l+r) / 2);
            min = Math.min(nums[m], min);
            if(nums[m] >= nums[l]){
                l = m + 1; 
            } else {
                r = m - 1;
            }
        }

        return min;
    }
}
