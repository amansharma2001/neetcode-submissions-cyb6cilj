class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            let n= matrix.length;
    let m= matrix[0].length;
    
    //Brute Force - linear Search
    // T.C:- On(m*n), S.C:- O(1)

    // for(let i=0;i<n;i++)
    // {
    //     for(let j=0;j<m;j++)
    //     {
    //         if(matrix[i][j] == target) return true;
    //     }
    // }
    // return false;

    //Better
    // T.C:- O(n*log(m)), S.C:- O(1)

    // for(let i=0;i<n;i++)
    // {
    //     let j=0, k=m-1;

    //     while(j<=k)
    //     {
    //         let mid = Math.floor((j+k)/2);

    //         if(matrix[i][mid] == target) return true;
    //         else if(matrix[i][mid] > target) k= mid-1;
    //         else j = mid+1;
    //     }
    // }
    // return false;


    //Optimal :- Binary Search
    // T.C:- O(log(m*n)), S.C:- O(1)
    
    let i=0, j=n-1;
    while(i<=j)
    {
        let mid =  Math.floor((i+j)/2);
        if(target< matrix[mid][0]) j = mid-1;
        else if(target>matrix[mid][m-1]) i=mid+1;
        else{
            let k=0, l=m-1;
            while(k<=l){
                let mid2 = Math.floor((k+l)/2);
                if(matrix[mid][mid2] == target) return true;
                else if(matrix[mid][mid2] > target) l= mid2-1;
                else k = mid2+1;            
            }
            return false;
        }
    }
    return false;

    }
}
