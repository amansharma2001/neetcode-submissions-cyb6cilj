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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

            // DFS
    // T.C:- O(n), S.C:- O(n)
    let num = 0;
    let result;
    function dfs(node, k)
    {
        if(!node) return;


       dfs(node.left,k);
       num++;
       if(num==k){ result= node.val; return result;}
       dfs(node.right,k);
    }

    dfs(root,k);
    return result;


    }
}
