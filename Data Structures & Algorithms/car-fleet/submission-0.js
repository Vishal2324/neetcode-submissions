class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = [];
        const stack = [];
        for (let i = 0; i < position.length; i++) {
            pair.push([position[i], speed[i]]);
        }
        pair.sort((a, b) => a[0] - b[0])
        for (let j = pair.length - 1; j >= 0; j--) {
            const [pos, sp] = pair[j];
            stack.push((target - pos) / sp);
            if(stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        return stack.length;
    }
}
