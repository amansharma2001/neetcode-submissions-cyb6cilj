class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
    //Brute Force - Linear Search
    // T.C:- O(n), S.C:-O(1)


    // Optimal - Binary Search
    // T.C:- O(logN), S.C:- O(1)

    let i=0, j= nums.length-1;

    while(i<j)
    {
        let mid = Math.floor((i+j)/2);

        if(nums[mid] > nums[j])
        {
            i=mid+1;
        }
        else {

            j=mid;
        }
    }
    return nums[i];
    }
}
