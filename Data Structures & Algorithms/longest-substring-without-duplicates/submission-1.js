class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
    let maxlen = 0;
    let left = 0;

    let map = new Map();

// bruteforce
    // for(let i =0;i<s.length;i++)
    // {
    //     let lastseen = new Set();
    //     for(let j=i;j<s.length;j++)
    //     {
    //         if(lastseen.has(s[j]))
    //         {
    //             break;
    //         }
    //         lastseen.add(s[j]);
    //         maxlen = Math.max(maxlen, j-i+1);
    //     }
    // }
// sliding window

    for(let right = 0; right<n;right++)
    {
        let ch = s[right];

        if(map.has(ch) && map.get(ch)>=left)
        {
            
            left = map.get(ch)+1;
        }
        map.set(ch,right);
        maxlen = Math.max(maxlen, right- left+1);
    }
    return maxlen;
    }
}
