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
     * @return {TreeNode}
     */
    invertTree(root) {
    if(root == null || (root.left == null && root.right==null)) return root;
    
    // Recursion
    // T.C:- O(n), S.C:- O(n)- Recursion stack
    // let l = root.left;
    // let r = root.right;

    // root.left = r;
    // root.right = l;

    // invertTree(root.left);
    // invertTree(root.right);

    // return root;


    // Iterative - BFS 
    // T.C:- O(n), S.C:- O(n)
    const queue = new Queue([root]);
    while(!queue.isEmpty())
    {
        let first = queue.pop();
        [first.left, first.right] = [first.right,first.left];
        if(first.left!=null) queue.push(first.left);
        if(first.right!=null) queue.push(first.right);
    }
    return root;
    }
}
