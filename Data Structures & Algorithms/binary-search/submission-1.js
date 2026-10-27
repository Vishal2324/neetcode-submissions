class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;  
        while(l <= r){
            const middleIdx = Math.round((l + r) / 2);
            const middle = nums[middleIdx];
            if(middle < target){
                l = middleIdx + 1;
            } else if(middle > target){
                r = middleIdx - 1;
            } else {
                return middleIdx;
            }
        }
        return -1;
    }
}
