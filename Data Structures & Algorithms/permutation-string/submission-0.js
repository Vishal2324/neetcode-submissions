class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = {};
        for (const char of s1) {
            map[char] = map[char] || 0;
            map[char]++;
        }
        let i = 0;
        let j = 0;
        let k = s1.length;
        let count = Object.keys(map).length;
        while(j<s2.length){
            if(map.hasOwnProperty(s2[j])){
                map[s2[j]]--;
                if(map[s2[j]] === 0){
                    count--;
                }
            }
            if(j - i + 1 < k){
                j++;
            } else if(j - i + 1 === k){
                if(count === 0){
                    return true;
                }
                if(map.hasOwnProperty(s2[i])){
                    if(map[s2[i]] === 0){
                        count++
                    }
                    map[s2[i]]++;
                }            
                i++;
                j++;
            }
        }

        return false;
    }
}
