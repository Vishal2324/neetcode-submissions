class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length === 1) return nums[0]
        let l = 0;  
        let r = nums.length - 1;
        while(l <= r){
            if(nums[l] < nums[r]){
                return nums[l];
            }
            let m = l + Math.floor((r - l) / 2);
            let mPrev = (m - 1);
            let mNext = (m + 1) % nums.length;
            if(nums[m] < nums[mPrev] && nums[m] < nums[mNext]){
                return nums[m];
            } else if(nums[l] <= nums[m]){
                l = m + 1;
            } else if(nums[r] >= nums[m]){
                r = m - 1;
            }
        }
    }
}
