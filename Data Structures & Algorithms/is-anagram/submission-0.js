class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};
        for(let i=0; i < s.length; i++){
            map[s[i]] = map[s[i]] || 0;
            map[s[i]]++;
        }
        let count = Object.keys(map).length;
        for(let j=0; j < t.length; j++){
            if(!map.hasOwnProperty(t[j])){
                return false;
            }
            map[t[j]]--;
            if(map[t[j]] === 0){
                count--;
            }
        }
        return count === 0;
    }
}
