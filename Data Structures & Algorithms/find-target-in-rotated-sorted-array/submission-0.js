class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binarySearch(nums, l, r, t){
        let idx = -1;
        while(l <= r){
            let m = l + Math.floor((r - l) / 2);
            if(nums[m] === t){
                idx = m;
                break;
            } else if(nums[m] > t){
                r = m - 1; 
            } else {
                l = m + 1;
            }
        }
        return idx;
    }

    getMin(nums){
        if(nums.length === 1) return 0;
        let l = 0;  
        let r = nums.length - 1;
        while(l <= r){
            if(nums[l] < nums[r]){
                return l;
            }
            let m = l + Math.floor((r - l) / 2);
            let mPrev = (m - 1);
            let mNext = (m + 1) % nums.length;
            if(nums[m] < nums[mPrev] && nums[m] < nums[mNext]){
                return m;
            } else if(nums[l] <= nums[m]){
                l = m + 1;
            } else if(nums[r] >= nums[m]){
                r = m - 1;
            }
        }
    }

    search(nums, target) {
        const min = this.getMin(nums)
        const res1 = this.binarySearch(nums, 0, min-1, target);
        const res2 = this.binarySearch(nums, min, nums.length - 1, target);
        console.log("min", min);
        console.log("res1", res1, "res2", res2);
        return Math.max(res1, res2);
    }

}
