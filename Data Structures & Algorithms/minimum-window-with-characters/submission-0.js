class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

    const map = new Map();
    // **Target** frequency map
    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let start = 0;
    let count = 0;
    const needed = t.length;
    let left = 0;
    let minLen = Infinity;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (map.has(char)) {
            if (map.get(char) > 0) {
                count++;
            }
            map.set(char, map.get(char) - 1);
        }

        // **Shrink** the window while it is valid
        while (count === needed) {
            // Update result
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
                start = left;
            }
            
            const leftChar = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) {
                    count--;
                }
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}
