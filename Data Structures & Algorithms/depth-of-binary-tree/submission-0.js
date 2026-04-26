/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root == null ) return 0;

    // Recursive
    // T.C:- O(n), S.C:- O(n) - Recursion Stack
    // let left = maxDepth(root.left);
    // let right = maxDepth(root.right);


    // return Math.max(left,right)+1;

    // Iterative
    // T.C:- O(n), S.C:- O(n)

    const queue = [root];
    let level = 0;
    while(queue.length>0)
    {   
        const len = queue.length;
        for(let i=0;i<len;i++)
        {
            let front = queue.shift();
            if(front.left) queue.push(front.left);
            if(front.right) queue.push(front.right);
        }
        level++; 
    }
    return level;
    }
}
