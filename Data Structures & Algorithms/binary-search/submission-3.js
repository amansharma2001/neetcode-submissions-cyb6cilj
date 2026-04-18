class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n= nums.length;

        // Brute Force - Linear Search
        // T.C:- O(n), S.C:- O(1)
        // for(let i=0;i<n;i++)
        // {
        //     if(nums[i]==target) return i;
        // }
        // return -1;

        //Optimal- Binary Search
        // T.C:- O(logN), S.C:-O(1)
        let i=0, j= n-1;
        
        while(i<=j)
        {
            let mid = Math.floor((i+j)/2);

            if(nums[mid]==target) return mid;
            else if(nums[mid]> target) j=mid-1;
            else i=mid+1;
        }
        return -1;
    }
}
