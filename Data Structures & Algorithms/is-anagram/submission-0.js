class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         let n1 = s.length;
    let n2 = t.length;
    if(n1!=n2) return false;

    // s=s.split(''), t=t.split('');

    // for(let i=0;i<n1;i++)
    // {
    //     for(let j=0;j<n2;j++)                        T.C:- O(n^2)
    //     {                                            S.C:- O(n)
    //         if(s[i]==t[j]){
    //             s[i] = '#';
    //             t[j] = '#';
    //             break;
    //         }
    //     }
    // }
    // return s.join('') == t.join('');


    // s=s.split('').sort().join('');                   T.C:- O(nlogn)
    // t=t.split('').sort().join('');                   S.C:- O(n)
    // return s==t;


    let map ={};

    for(let i=0;i<n1;i++)
    {
        map[s[i]] = (map[s[i]] || 0)+1;
    }
    
    for(let i=0;i<n2;i++)
    {   
        if(!map[t[i]]) return false;
        map[t[i]]--;
    }
    return true;
    }
}
