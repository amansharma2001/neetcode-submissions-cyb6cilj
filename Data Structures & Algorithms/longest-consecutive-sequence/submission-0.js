class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0) return 0;
    let max_length=1;

    // Brute force
    // T.C:- O(n^2), S.C:- O(1)
    // for(let i=0;i<nums.length;i++)
    // {
    //     let curNum = nums[i];
    //     let len = 1;
    //     while(nums.includes(curNum+1)){ 
    //         curNum++;
    //         len++;
    //     }

    //     max_length = Math.max(max_length,len);
    // }
    // return max_length;


    // Better
    // T.C:- O(nlogn), S.C:-  O(n)
    // nums= nums.sort((a,b)=>a-b);
    // let len=1;
    // for(let i=1;i<nums.length;i++)
    // {
    //     if(nums[i]==nums[i-1]) continue;

    //     if(nums[i]==nums[i-1]+1)
    //     {
    //         len++;
    //     }
    //     else{
    //         max_length = Math.max(max_length,len);
    //         len=1;
    //     }
    // }
    // return Math.max(max_length,len);

    // Optimal
    // T.C:- O(n), S.C:- O(n)

    let s = new Set(nums);
    
    for(let ch  of s)
    {   
        if(!s.has(ch-1))
        {
            let len=1;
            while(s.has(ch+1))
            {
                ch++;
                len++;
            }
            max_length= Math.max(max_length, len);
        }
    }
    return max_length;
    }
}
