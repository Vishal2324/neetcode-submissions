class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         const map = {};
        let i = 0;
        let j = 0;
        let max = 0;
        let mapMax = 0;
        while(j<s.length){
            map[s[j]] = map[s[j]] || 0;
            map[s[j]]++;
            mapMax = Math.max(mapMax, map[s[j]]);
            if((j - i + 1) - mapMax <= k || j - i + 1 === mapMax){
                max = Math.max(max, (j - i + 1));
            } else if((j - i + 1) - mapMax > k){
                while((j - i + 1) - mapMax > k){
                    map[s[i]]--;
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
