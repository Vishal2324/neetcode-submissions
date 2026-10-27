class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */

    LCS(x, y, m, n){
        const dp = [];
        for(let i = 0; i <= m; i++){
            for(let j = 0; j <= n; j++){
                dp[i] = dp[i] || [];
                if(i === 0 || j === 0){
                    dp[i][j] = 0;
                } else {
                    if(x[i - 1] === y[j - 1]){
                        dp[i][j] = 1 + dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = Math.max(
                            dp[i - 1][j],
                            dp[i][j - 1]
                        )
                    }
                }
            }
        }
        return dp[m][n];
    }

    longestCommonSubsequence(text1, text2) {
        return this.LCS(text1, text2, text1.length, text2.length);
    }
}
