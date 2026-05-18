class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
            nums.sort((a,b)=>a-b);
    let n = nums.length;
    return nums[n-k];
    }
}
