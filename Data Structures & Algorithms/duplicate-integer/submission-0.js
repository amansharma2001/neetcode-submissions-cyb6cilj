class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let n = nums.length;
    // for(let i=0;i<n;i++)
    // {
        // for(let j=i;j<n;j++)                                    T.C:- O(n^2), S.C:- O(1)
        // {
        //     if(nums[i]==nums[j]&& i!=j) return true;
        // }
    // }

    
    //nums.sort();
    // for(let i=0;i<n-1;i++)
    // {
    //     if(nums[i]==nums[i+1]) return true;                     T.C:- O(nlogn)-sorting
    // }                                                           S.C:- O(1)

    let s = new Set();

    for(let i=0;i<n;i++)
    {
        if(s.has(nums[i])) return true;
        s.add(nums[i]);
    }

    return false;
    }
}
