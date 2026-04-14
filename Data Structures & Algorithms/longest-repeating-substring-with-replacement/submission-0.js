class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let ans =0;
    // Brute Force
    // T.C:- O(n^2), S.C:- O(n)
    // for(let i=0;i<s.length;i++)
    // {
    //     let map = new Map();
    //     let maxF=0;
    //     for(let j=i;j<s.length;j++)
    //     { 
    //         map.set(s[j], (map.get(s[j])||0)+1);
    //         maxF = Math.max(maxF, map.get(s[j]));

    //         if(j-i+1-maxF <= k){
    //             ans = Math.max(ans,j-i+1);
    //         }
    //     }
    // }
    

    // Optimal - Sliding Window
    // T.C:- O(N), S.C:- O(N)
    let left =0;
    let map = new Map();
    let maxF=0;
    for(let right=0;right<s.length;right++)
    {
        map.set(s[right], (map.get(s[right])||0)+1);
        maxF = Math.max(maxF, map.get(s[right]));
        if(right-left+1-maxF <= k) ans = Math.max(map.get(s[right]), right-left+1);
        else{
            map.set(s[left], map.get(s[left])-1);
            left++;
        }
    }

    return ans;
    }
}
