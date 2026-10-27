class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    getFrequencyString(str){
        const freq = new Array(26).fill(0);
        for (const char of str) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let frequencyString = "";
        let currentCharCode = 'a'.charCodeAt(0);
        for (const count of freq) {
            frequencyString += String.fromCharCode(currentCharCode);
            frequencyString += count;
            currentCharCode++;
        }
        return frequencyString;
    }

    groupAnagrams(strs) {
        const ptrs = {};
        for (let i = 0; i < strs.length; i++) {
            const element = strs[i];
            const freqStr = this.getFrequencyString(element);
            ptrs[freqStr] = ptrs[freqStr] || [];
            ptrs[freqStr].push(element);
        }
        return [...Object.values(ptrs)];
    }
}
