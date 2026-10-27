class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === "+"){
                stack.push(stack.pop() + stack.pop());
            } else if(tokens[i] === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if(tokens[i] === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if(tokens[i] === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }
}
