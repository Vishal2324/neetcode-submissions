class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const num of nums){
            map[num] = map[num] || 0;
            map[num]++;
        }   
        const result = Object.keys(map).sort((a, b) => map[b] - map[a]);
        return result.slice(0, k);
    }
}
