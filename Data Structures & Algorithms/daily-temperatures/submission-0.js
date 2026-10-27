class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            if(stack.length && stack[stack.length - 1][0] < temperatures[i]){
                while(stack.length && stack[stack.length - 1][0] < temperatures[i]){
                    const [_, idx] = stack[stack.length - 1];
                    result[idx] = i - idx;
                    stack.pop();
                }
                stack.push([temperatures[i], i]);
            } else {
                stack.push([temperatures[i], i]);
            }
        }     
        return result;
    }
}
