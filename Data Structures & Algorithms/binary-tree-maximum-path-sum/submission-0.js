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
    maxPathSum(root) {
        let res = -Infinity;
    function dfs(root)
    {
        if(root==null) return 0;

        let left = Math.max(dfs(root.left),0);
        let right = Math.max(dfs(root.right),0);
        let rootL = left+right+root.val;

        res = Math.max(rootL, res);
        return root.val +  Math.max(left,right);
    }
    dfs(root);
    return res;
    }
}
