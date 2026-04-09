class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
    //  let ans = [];
    // Brute Force
    // T.C:- O(n^2), S.C:- O(1)
    // for(let i=0;i<n;i++)
    // {   
    //     let pro =1;
    //     for(let j=0;j<n;j++)
    //     {
    //         if(i==j) continue;
    //         pro = pro * nums[j];
    //     }
    //     ans.push(pro);
    // }

    // Better
    // T.C:- o(n), S.C:- O(n);
    // let pre = new Array(n);
    // let suf = new Array(n);
    // let ans = [];

    // pre[0]=1, suf[n-1]=1;

    // for(let i=1;i<n;i++)
    // {
    //     pre[i]= pre[i-1]*nums[i-1];
    // }
    // for(let i=n-2;i>=0;i--)
    // {
    //     suf[i]= suf[i+1]*nums[i+1];
    // }

    // for(let i=0;i<n;i++)
    // {
    //     ans[i] =  pre[i]* suf[i];
    // }

    
    // Optimal
    // T.C:- o(n), S.C:- O(1);

    
    let ans = new Array(n);
    ans[0]=1;
    for(let i=1;i<n;i++)
    {
        ans[i]= ans[i-1]*nums[i-1];
    }

    let suf = 1;
    for(let i=n-1;i>=0;i--)
    {
        ans[i]= suf*ans[i];
        suf = suf*nums[i];
    }

    return ans;
    }
}
