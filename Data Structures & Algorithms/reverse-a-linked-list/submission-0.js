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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        
    //T.C:- O(n), S.C:- O(1)
    //Iterative
    let prev = null;
    let curr = head;

    while(curr!=null)
    {
        let nex = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nex;
    }
    return prev

    //Recursive
    // if(head == null || head.next == null) return head;


    // const newHead = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;

    // return newHead;
    }
}
