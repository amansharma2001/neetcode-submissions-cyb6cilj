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
     * @param {number} k
     * @return {ListNode}
     */
reverse(head)
{
    if(head == null || head.next== null) return head;

    let ans = this.reverse(head.next);

    head.next.next =head;
    head.next = null;

    return ans;
}
reverseKGroup(head, k) {
    
    if (!head) return null; // Edge case: empty list

    let ls = head;
    for(let i=0;i<k-1;i++)
    {
        
        ls = ls.next;
        if(ls ==null) return head;
    }

    let nextGrp = ls.next; 
    ls.next = null;

    let rev = this.reverse(head);

    head.next = this.reverseKGroup(nextGrp,k);
    return rev;
}
}
