class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b);
        // Brute Force
        // T.C:- O(n^3), S.c:-O(n)
        // const res = new Set();
        // nums.sort((a, b) => a - b);
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         for (let k = j + 1; k < nums.length; k++) {
        //             if (nums[i] + nums[j] + nums[k] === 0) {
        //                 res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        //             }
        //         }
        //     }
        // }
        // return Array.from(res).map((item) => JSON.parse(item));

        // Better Force
        // T.C:- O(n^2), S.c:- O(n)
    //    const count = new Map();
    //     for (let num of nums) {
    //         count.set(num, (count.get(num) || 0) + 1);
    //     }

    //     const res = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         count.set(nums[i], count.get(nums[i]) - 1);
    //         if (i > 0 && nums[i] === nums[i - 1]) continue;

    //         for (let j = i + 1; j < nums.length; j++) {
    //             count.set(nums[j], count.get(nums[j]) - 1);
    //             if (j > i + 1 && nums[j] === nums[j - 1]) continue;

    //             const target = -(nums[i] + nums[j]);
    //             if (count.get(target) > 0) {
    //                 res.push([nums[i], nums[j], target]);
    //             }
    //         }

    //         for (let j = i + 1; j < nums.length; j++) {
    //             count.set(nums[j], count.get(nums[j]) + 1);
    //         }
    //     }
    //     return res;

    // Optimal 
    // T.c:- O(nlogn), S.c:- O(n)

    const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
