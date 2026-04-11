class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let max = 0;

    //brute Force
    // T.C:-  O(N^2), S.C:- O(1)
    // for(let i = 0;i<height.length;i++)
    // {
    //     let m = Number.MIN_SAFE_INTEGER;
    //     let h_max = 0;
    //     let j = i-1;
    //     while(j>=0)
    //     {
    //         m = Math.min(height[i],height[j])*(i-j);
    //         h_max = Math.max(h_max,m);
    //         j--;
    //     }
    //     max = Math.max(h_max,max);
    // }

    // Optimal
    // T.c:- O(logN), S.c:- O(1)

    let i=0, j= height.length-1;

    while(i<=j)
    {
        max=  Math.max(max, Math.min(height[i],height[j])*(j-i));
        if(height[i]<=height[j])
        {
            i++;
        }
        else
        {
            j--;
        }

    }

    return max;
    }
}
