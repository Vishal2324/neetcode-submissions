class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0){
            return ""
        }
        if(strs.length === 1 && strs[0] === "") return "null"
        return strs.join("#:$")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "") return []
        if(str === "null") return [""]
        return str.split("#:$")
    }
}
