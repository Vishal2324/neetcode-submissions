class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums = []) {
        nums = nums.sort((a, b) => a - b);
        const result = [];
        for(let i = 0; i < nums.length; i++){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let a = i+1;
            let b = nums.length - 1;
            while(a < b){
                const sum = nums[a] + nums[b] + nums[i];
                if(sum === 0){
                    result.push([nums[i], nums[a], nums[b]]);
                    a++;
                    b--;
                    while (a < b && nums[a] === nums[a - 1]) {
                        a++;
                    }
                } else if(sum > 0){
                    b--;
                } else if(sum < 0){
                    a++;
                }
            }
        }

        return result;
    }
}
