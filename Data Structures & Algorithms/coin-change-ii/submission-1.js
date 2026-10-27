class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */

    calculate(amount, coins, total, idx, dp){
        if(total === amount) return 1;
        if(total > amount || idx >= coins.length) return 0;
        if(dp[idx][total] !== -1) return dp[idx][total];
        const take = this.calculate(amount, coins, total + coins[idx], idx, dp);
        const skip = this.calculate(amount, coins, total, idx + 1, dp);
        return dp[idx][total] = take + skip;
    }
    
    change(amount, coins) {
        const dp = Array.from({ length: coins.length + 1 }, () => new Array(amount + 1).fill(-1));
        return this.calculate(amount, coins, 0, 0, dp);
    }
}
