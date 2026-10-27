class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */

    findPaths(i, j, m, n){
        if(i === m - 1 && j === n - 1) return 1;
        if(i >= m || j >= n) return 0
        const down = this.findPaths(i + 1, j, m, n);
        const right = this.findPaths(i, j + 1, m, n);
        return down + right;
    }

    uniquePaths(m, n) {
        return this.findPaths(0, 0, m, n);
    }
}
