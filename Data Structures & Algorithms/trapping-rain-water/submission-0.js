class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max =0;

    // Brute force
    // T.C:- O(N^2), S.C:- O(1)
    // for(let i=0;i<height.length;i++){
    //     let left_max =0;
    //     let right_max= 0;
    //     let l = i-1;
    //     let r = i+1;
    //     while(l>=0)
    //     {
    //         left_max = Math.max(left_max, height[l]);
    //         l--;
    //     }
    //     while(r<=height.length-1)
    //     {
    //         right_max = Math.max(right_max, height[r]);
    //         r++;
    //     }
    //     let water = Math.min(left_max,right_max)-height[i];
    //     if(water>0)max+=water;
    
    // }

    // Optimal
    // T.C:- O(n), S.C:- O(1)

    let left_max =0, right_max =0;
    let i=0, j = height.length-1;

    while(i<=j)
    {
        if(height[i]<=height[j])
        {
            if(left_max>height[i])
            {
                max+= left_max-height[i];
            }
            else
            {
                left_max = height[i];
            }
            i++;
        }
        else
        {
            if(right_max>height[j])
            {
                max+= right_max - height[j]
            }
            else
            {
                right_max = height[j];
            }
            j--;

        }
        
    }

    return max;
    }
}
