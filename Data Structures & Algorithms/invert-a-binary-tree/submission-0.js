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

    let l = root.left;
    let r = root.right;

    root.left = r;
    root.right = l;

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
    }
}
