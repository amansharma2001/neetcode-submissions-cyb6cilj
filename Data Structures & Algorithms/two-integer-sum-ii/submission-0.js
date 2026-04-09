class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
            let n = numbers.length;

    //Brute Force
    //T.C:- O(n^2), S.C:-O(1)
     
    // for(let i=0;i<n;i++)
    // {
    //     for(let j=i+1;j<n;j++)
    //     {
    //         if(numbers[i]+numbers[j]== target) return [i+1,j+1];
    //     }
    // }

    //Better - binary Search
    // T.C:- O(nlogN), S.C:- O(1)

    // for(let i=0;i<numbers.length;i++){

    //     let left = i+1
    //     let right = numbers.length-1
    //     let need = target - numbers[i]

    //     while(left <= right){

    //         let mid = Math.floor((left+right)/2)

    //         if(numbers[mid] === need){
    //             return [i+1, mid+1]
    //         }
    //         else if(numbers[mid] < need){
    //             left = mid + 1
    //         }
    //         else{
    //             right = mid - 1
    //         }
    //     }
    // }

    //Optimal - two pointers
    // T.C:- O(logN), S.C:- O(1)

    let i=0;
    let j = n-1;

    while(i<=j)
    {
        if(numbers[i]+numbers[j]== target) return [i+1,j+1];

        else if(numbers[i]+numbers[j]> target) j--;
        else if(numbers[i]+numbers[j]< target) i++;
    }
    return [];
    }
}
