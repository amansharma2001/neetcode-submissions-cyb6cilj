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
};
    diameterOfBinaryTree(root) {
        if(root==null || (root.left==null && root.right ==null)) return 0;
    let left = 0;
    let right = 0;

    left = this.diameterOfBinaryTree(root.left);
    right = this.diameterOfBinaryTree(root.right);

    let currD = this.maxDepth(root.left)+this.maxDepth(root.right);

    return Math.max(currD, Math.max(left,right));
    }
}
