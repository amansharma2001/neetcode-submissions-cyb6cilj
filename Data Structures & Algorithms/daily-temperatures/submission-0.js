class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n= temperatures.length
    let ans=new Array(n).fill(0);
    
    // Brute Force
    // T.C:- O(n^2). S.C:- O(n)
    // for(let i =0; i<n;i++)
    // {   
    //     let j=i;
    //     while(j<n){
    //         if(temperatures[j]> temperatures[i]){ ans.push(j-i); break;}
    //         j++;
    //     }
    //     if(j==n) ans.push(0);    
    // }

    const st=[]
    for(let i=n-1;i>=0;i--)
    {
        while(st.length && temperatures[i]>=temperatures[st[st.length-1]]){
            st.pop();
        }
        ans[i] = st.length? st[st.length-1]-i :0;
        st.push(i);
    }


    return ans;
    }
}
