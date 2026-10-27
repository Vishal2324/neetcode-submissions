class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */

    findPaths(i, j, m, n, dp){
        if(i === m - 1 && j === n - 1) return 1;
        if(i >= m || j >= n) return 0;
        if(dp[i][j] !== -1) return dp[i][j]
        const down = this.findPaths(i + 1, j, m, n, dp);
        const right = this.findPaths(i, j + 1, m, n, dp);
        return dp[i][j] = down + right;
    }

    uniquePaths(m, n) {
        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));
        return this.findPaths(0, 0, m, n, dp);
    }
}
