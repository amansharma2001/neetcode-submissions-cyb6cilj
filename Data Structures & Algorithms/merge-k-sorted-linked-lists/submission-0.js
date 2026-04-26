/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists.length) return null;
    function merge(l1,l2){
        if(!l1) return l2;
        if(!l2) return l1;

        if(l1.val < l2.val){
            l1.next = merge(l1.next,l2);
            return l1;
        }

        l2.next = merge(l1, l2.next);
        return l2;
    }
    function recurse(start, end){
        if(start === end) return lists[start];
        let mid = Math.floor((start+end)/2);
        let left = recurse(start, mid);
        let right = recurse(mid+1, end);

        return merge(left, right);
    }
    return recurse(0, lists.length-1);
    }
}
