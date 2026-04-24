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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //Brute Force
    // T.C:- O(n), S.C:- O(1)

    // let h = head;
    // let len = 0;
    // while(h!=null)
    // {
    //     len++;
    //     h=h.next;
    // }
    // let removeIndex = len-n;
    // if(removeIndex == 0) return head.next;
    // let h1 = head;
    // for(let i=0;i<removeIndex-1;i++)
    // {
    //     h1=h1.next;
    // }

    // h1.next = h1.next.next;

    // return head;

    //  Recursion
    // T.C:- O(n), S.C:- O(n)

    // let h = head;
    // let len = 0;
    // while(h!=null)
    // {
    //     len++;
    //     h=h.next;
    // }

    // if(len == n) return head.next;

    // head.next = removeNthFromEnd(head.next,n);
    // return head;


    // Two pointers
    //T.C:- O(n), S.C:- O(1)

    let left =head, right = head;

    for(let i = 0;i<n;i++)
    {
        right = right.next;
    }
    if(right==null) return head.next;


    while(right.next!=null){
        left = left.next;
        right=right.next;
    }

    left.next = left.next.next;

    return head;
    }
}
