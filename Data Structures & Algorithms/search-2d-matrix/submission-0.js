class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const list = [];
        for(const mx of matrix){
            list.push(...mx);
        }
        let l = 0;
        let r = list.length - 1;
        while(l <= r){
            const mid = Math.round((l+r) / 2);
            if(list[mid] < target){
                l = mid + 1;
            } else if(list[mid] > target){
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false
    }
}
