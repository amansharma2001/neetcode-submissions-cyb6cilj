class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
            
    //Brute Force
    // T.C:- O(nlogN), S.C:- O(N+M)
    // let arr = [...nums1, ...nums2];

    // arr.sort((a, b) => a - b);

    // let len = arr.length;
    // let mid= Math.floor(len/2);
    // if(len%2==1) return arr[mid];

    // return (arr[mid]+ arr[mid-1])/2; 

    //Better
    //T.C:- O(m+n), S.C:- O(m+n)
    // let merged = [];
    // let i = 0, j = 0;

    // while (i < nums1.length && j < nums2.length) {
    //     if (nums1[i] < nums2[j]) {
    //         merged.push(nums1[i++]);
    //     } else {
    //         merged.push(nums2[j++]);
    //     }
    // }

    // while (i < nums1.length) merged.push(nums1[i++]);
    // while (j < nums2.length) merged.push(nums2[j++]);

    // let mid = Math.floor(merged.length / 2);
    // if (merged.length % 2 === 0) {
    //     return (merged[mid-1] + merged[mid]) / 2;
    // } else {
    //     return merged[mid];
    // }

    //Optimal
    // T.C:- O(log(min(m,n))), S.C:- O(1)

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;
    
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        const maxX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        const maxY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
        
        const minX = (partitionX === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
        const minY = (partitionY === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    }
}
