class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s = {}, s1sum = 0, s2sum = 0,
        left = 0, right = s1.length - 1;
    
    for (let i = 0; i < s1.length; i++) {
        s1sum += s1.charCodeAt(i);
        s2sum += s2.charCodeAt(i);
    }
    
    while (right < s2.length) {
        if (s1sum === s2sum) {
            let ch = isTheSameFreq(s1, s2.substring(left, right + 1));
            if (ch) return true;
        }
        
        right++;
        if (!s2[right]) return false;
        s2sum = s2sum - s2[left++].charCodeAt(0) + s2[right].charCodeAt(0);
    }
    
    return false;
    
    
    function isTheSameFreq(s1, s2) {
        let counter = 0;
        for (let i = 0; i < s1.length; i++)
            if (s2.includes(s1[i])) counter++;
        
        return counter === s1.length;
    }
    }
}
