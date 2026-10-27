class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let l = 0;
        let r = rows * cols - 1;
        while(l <= r){
            let m = Math.round((l + r) / 2);
            let midRow = Math.floor(m / cols);
            let midCol = Math.floor(m % cols);
            let mid = matrix[midRow][midCol];
            console.log("m", m, "midRow", midRow, "midCol", midCol, "mid", mid)
            if(mid < target){
                l = m + 1;
            } else if(mid > target){
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
