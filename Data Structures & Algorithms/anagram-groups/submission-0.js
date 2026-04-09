class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Brute Force
    //let ans = [];

    // for(let i=0; i<strs.length; i++)                         T.C:- O(N^2 *klogn)
    // {                                                        S.C:- O(N)
    //     if(strs[i]==="visited") continue;
    //     let ch1 =  strs[i].split('').sort().join('');
    //     let arr=[];
    //     arr.push(strs[i]);
    //     for(let j=i+1;j< strs.length;j++ )
    //     {
           
    //         let ch2 = strs[j].split('').sort().join('');

    //         if(ch1 === ch2 )
    //         {
    //             arr.push(strs[j]);
    //             strs[j] = "visited";
    //         }
    //     }
    //     ans.push(arr);
    // }
    //     return ans;


    // Better
    // T.C:- O(n * klog N)
    // S.C:- O(n*k);
    // let ans={};
    // for(let str of strs)
    // {
    //     let ch = str.split('').sort().join('');

    //     if(!ans[ch])
    //     {
    //         ans[ch] = [];
    //     }
    //     ans[ch].push(str);
    // }

    // return Object.values(ans);

    // Optimal 
    // T.C:-  O(n*k);
    // S.C:-  O(n*k);
    let ans={};
    for(let str of strs)
    {
        let count = new Array(26).fill(0);

        for(let ch of str)
        {
            count[ch.charCodeAt(0)-97]++;
        }
        let key = count.join('#');

        if(!ans[key])
        {
            ans[key] = [];
        }
        ans[key].push(str);
    }

    return Object.values(ans);
    }
}
