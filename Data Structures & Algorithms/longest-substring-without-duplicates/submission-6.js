class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 1) return 1;
        const map = {};
        let i = 0;
        let j = 0;
        let max = 0;
        while(j<s.length){
            map[s[j]] = map[s[j]] || 0;
            map[s[j]]++
            if(Object.keys(map).length === j - i + 1){
                max = Math.max(max, Object.keys(map).length);
            } else if(Object.keys(map).length < j - i + 1){
                while(Object.keys(map).length < j - i + 1){
                    map[s[i]]--
                    if(map[s[i]] === 0){
                        delete map[s[i]];
                    }
                    i++;
                }
            }
            j++;
        }
        return max;
    }
}
