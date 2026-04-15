class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
    // Brute Force
    // T.C:- O(n^2), S.C:- O(n)
    // while(s.includes('()') || s.includes('{}') || s.includes('[]'))
    // {
    //     s = s.replace('()','').replace('{}','').replace('[]','')
    // }
    // return s==="";


    // Optimal
    // T.C:- O(N), S.C:- O(n)
    let stk1 = [];
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    for(let ch of s)
    {
        if(ch=='('|| ch=='{' || ch=='['){
            stk1.push(ch);
        }
        else{
            if(stk1.length===0 || stk1[stk1.length-1] != map[ch]){
                return false;
            }
            stk1.pop();
        }
    }
    return stk1.length===0;
    }
}
