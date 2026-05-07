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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
                if (!preorder.length || !inorder.length) {
            return null;
        }

    let pre = preorder[0];

    let root = inorder.indexOf(pre);
    let root1 = new TreeNode(pre);
    root1.left  = this.buildTree(preorder.slice(1,root+1), inorder.slice(0,root));
    root1.right  = this.buildTree(preorder.slice(root+1), inorder.slice(root+1));

    return root1;
    }
}
