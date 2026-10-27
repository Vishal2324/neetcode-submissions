class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProduct = [];
        const postProduct = [];
        const result = [];
        let pre = 1;
        let post = 1;
        for(const num of nums){
            pre = pre * num;
            preProduct.push(pre);
        }
        for(let i=nums.length-1; i >= 0; i--){
            post = post * nums[i];
            postProduct[i] = post;
        }

        for(let j=0; j<nums.length; j++){
            result.push((preProduct[j-1] === undefined ? 1 : preProduct[j-1]) * (postProduct[j+1] === undefined ? 1 : postProduct[j+1]));
        }
        return result;
    }
}
