class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums = []) {
        nums = nums.sort((a, b) => a - b);
        const result = [];
        const seenTriplets = new Set(); // store unique "a,b,c" strings

        for (let i = 0; i < nums.length; i++) {
            let a = i + 1;
            let b = nums.length - 1;

            while (a < b) {
                const sum = nums[i] + nums[a] + nums[b];

                if (sum === 0) {
                    const triplet = [nums[i], nums[a], nums[b]];
                    const key = triplet.join(",");

                    if (!seenTriplets.has(key)) {
                        seenTriplets.add(key);
                        result.push(triplet);
                    }

                    a++;
                    b--;
                } 
                else if (sum > 0) {
                    b--;
                } 
                else {
                    a++;
                }
            }
        }

        return result;
    }
}
