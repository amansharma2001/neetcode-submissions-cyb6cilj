class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        strs.forEach((str) => {
            res = res+ str.length + "#" + str;
        });
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            ans.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return ans;
    }
}
