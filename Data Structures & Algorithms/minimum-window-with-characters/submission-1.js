class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";
        const map = {};
        for (const char of t) {
            map[char] = map[char] || 0;
            map[char]++;
        }
        let i = 0;
        let j = 0;
        let count = Object.keys(map).length;
        let minimum = s.length;
        let minW = [-1, s.length-1];
        while(j<s.length){
            if(map.hasOwnProperty(s[j])){
                map[s[j]]--;
                if(map[s[j]] === 0){
                    count--;
                }
            }

            if(count === 0){
                while(count === 0){
                    minimum = Math.min(minimum, j - i + 1);
                    if((minW[1] - minW[0] + 1) > j - i + 1){
                        minW[0] = i;
                        minW[1] = j;
                    }
                    if(map.hasOwnProperty(s[i])){
                        if(map[s[i]] === 0){
                            count++;
                        }
                        map[s[i]]++;
                    } 
                    i++;
                }
            }

            j++;
        }
        if(minW[0] === -1){
            return "";
        }
        return s.substring(minW[0], minW[1]+1);
    }
}
