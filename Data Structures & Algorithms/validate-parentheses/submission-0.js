class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        };
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if(stack.length && stack[stack.length - 1] === map[str[i]]){
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return (stack.length === 0);
    }
}
