class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

    // Brute force
    // T.C:- O(n^2), S.C:- O(1)
    // for(let i=0;i<prices.length;i++)
    // {
    //     let maxP =0;
    //     for(let j=i+1;j<prices.length;j++)
    //     {
    //         maxP= Math.max(maxP, prices[j]-prices[i]);
    //     }
    //     maxProfit  = Math.max(maxProfit, maxP);
    // }

    // Better 
    // T.C:- O(n^2), S.C:- O(1)
    // for(let i=0;i<prices.length;i++)
    // {
    //     let maxP =0;
    //     let j=i+1;
    //     let k= prices.length-1;
    //     while(j<=k)
    //     {   
    //         let p = Math.max(prices[j], prices[k]);
    //         maxProfit  = Math.max(maxProfit, p-prices[i]);
    //         if(prices[j]>=prices[k]) j++;
    //         else k--;
    //     }
        
    // }

    // Optimal
    // T.C:- O(n), S.C:- O(1)
    let mini = Infinity;
    for(let i=0;i<prices.length;i++)
    {
        if(prices[i]<mini) mini = prices[i];
        else if(prices[i]-mini > maxProfit) maxProfit =prices[i]-mini;
    }
    
    return maxProfit;
    }
}
