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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Iterative
        // T.C:- O(n+m), S.C:- O(1)
        // const dummy = { val: 0, next: null };
        // let node = dummy;

        // while (list1 && list2) {
        //     if (list1.val < list2.val) {
        //         node.next = list1;
        //         list1 = list1.next;
        //     } else {
        //         node.next = list2;
        //         list2 = list2.next;
        //     }
        //     node = node.next;
        // }

        // if (list1) {
        //     node.next = list1;
        // } else {
        //     node.next = list2;
        // }

        // return dummy.next;

        // Recursive
        // T.C:- o(m+n), S.C:- O(n+m)
         //recursive
    //T.C:- O(m+n), S.C:- O(n+m)

        if(!list1) return list2;
        if(!list2) return list1;

        if(list1.val <= list2.val)
        {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        }
        else
        {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
