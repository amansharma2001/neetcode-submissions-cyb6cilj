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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
                if(root==null || root.val==p.val || root.val==q.val ) return root;
        let left1 = this.lowestCommonAncestor(root.left,p,q);
        let right1 = this.lowestCommonAncestor(root.right,p,q); 

        if(left1==null) return right1;
        if(right1==null) return left1;

        return root;
    }
}
