class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute Force
    // t.C:- O(n), S.C:- o(nlog n); 
    // let map = {}

    // for(let num of nums){
    //     map[num] = (map[num] || 0) + 1
    // }

    // let arr = Object.entries(map)

    // arr.sort((a,b)=>b[1]-a[1])

    // let res = []

    // for(let i=0;i<k;i++){
    //     res.push(Number(arr[i][0]))
    // }

    // return res



    //Optimal
    //T.C:- O(n), S.C:- O(n)

    let map = {}
    for(let num of nums){
        map[num] = (map[num] || 0) + 1
    }

    let bucket = Array(nums.length + 1).fill().map(()=>[])

    for(let key in map){
        bucket[map[key]].push(Number(key))
    }

    let res = []

    for(let i=bucket.length-1;i>=0 && res.length<k;i--){
        for(let num of bucket[i]){
            res.push(num)
            if(res.length === k) break
        }
    }

    return res
    }
}
