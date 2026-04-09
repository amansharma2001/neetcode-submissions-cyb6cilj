class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
           let n=nums.length;

    // let arr=[];                                      T.C:- O(n^2)
    // for(let i=0;i<n-1;i++)                           S.C:- O(n)
    // {
    //     for(let j=i+1;j<n;j++)
    //     {
    //         if(nums[i]+nums[j]==target)
    //         {
    //             arr.push(i);
    //             arr.push(j);
    //             return arr;
    //         }
    //     }
    // }
    // return arr;


    // T.C:- O(n)
    // S.C:- O(n)
    let obj = {};
    for(let i=0;i<n;i++)
    {
        if(obj[target- nums[i]]!=undefined) return [obj[target- nums[i]],i];

        obj[nums[i]] = i;
    }
    return [];}
}
