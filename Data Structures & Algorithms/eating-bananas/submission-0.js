class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    
calculate = function(piles,m){

    let min = 0;
    for(let i=0;i<piles.length;i++)
    {   
        min += Math.ceil(piles[i]/m);
    }
    return min;
}
 minEatingSpeed = function(piles, h) {
 let maxTime = Math.max(...piles);
    
    // Brute Force
    // T.C:- O(max(piles)* n), S.C:- O(1)
    // for(let i=1;i<=maxTime;i++)
    // {
    //     let cal= this.calculate(piles,i);
    //     if(cal<=h)
    //     {
    //         return i;
    //     }
    // }


    // Optimal
    // T.C:- O(max(piles)* logN), S.C:- O(1)
    let i=1, j=maxTime;
    let ans = maxTime;
    while(i<=j){
        let mid = Math.floor((i+j)/2);

        if((this.calculate(piles,mid))<=h)
        {
            ans = mid;
            j=mid-1;
        }
        else
        {
            i=mid+1;
        }
           
        
    }

    return ans;
}
}
