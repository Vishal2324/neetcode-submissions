class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let area = 0;
        const stack = [];
        for (let i = 0; i < heights.length; i++) {
            if(stack.length && stack[stack.length - 1][1] >= heights[i]){
                let lastHeightIdx = -1;
                while(stack.length && stack[stack.length - 1][1] >= heights[i]){
                    const [idx, height] = stack.pop();
                    area = Math.max(area, height * (i - idx));
                    lastHeightIdx = idx;
                }
                stack.push([lastHeightIdx, heights[i]]);
            } else{
                stack.push([i, heights[i]])
            }
        }

        while(stack.length){
            const [idx, height] = stack.pop();
            area = Math.max(area, height * (heights.length - idx));
        }

        return area;
    }
}
