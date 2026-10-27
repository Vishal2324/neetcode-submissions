class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let i = 0;
        let j = 0;
        let maxList = [];
        const result = [];
        while(j<nums.length){
            while(maxList.length && maxList[maxList.length - 1] < nums[j]){
                maxList.pop();
            }
            maxList.push(nums[j]);
            if((j-i+1) < k){
                j++;
            } else if((j-i+1) === k){
                result.push(maxList[0]);
                if(maxList[0] === nums[i]){
                    maxList.shift();
                }
                i++;
                j++;
            }
        }
        return result;
    }
}
