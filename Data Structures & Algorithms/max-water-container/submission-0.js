class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let i = 0;
        let j = heights.length - 1;
        while(i < j){
            const width = j - i;
            max = Math.max(max, Math.min(heights[i], heights[j]) * width);
            if(heights[i] > heights[j]){
                j--;
            } else {
                i++;
            }
        }
        return max;
    }
}
