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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

    // BFS
    // T.C:- O(n), S.C:- O(n)

    // let ans = [];

    // let que = [];
    // que.push(root);

    // while(que.length>0)
    // {
    //     ans.push(que[que.length-1].val);
        
    //     let size = que.length;
    //     for(let i=0;i<size;i++)
    //     {
    //         let v = que.shift();
    //         if(v.left)que.push(v.left);
    //         if(v.right)que.push(v.right);
    //     }

    // }
    // return ans;

    // DFS
    // T.C:- O(n), S.C:- O(1)

    let ans = [];
    function dfs(node, level)
    {
        if(!node) return;

        if(level === ans.length) ans.push(node.val);

        dfs(node.right, level+1);
        dfs(node.left, level+1);
    }
    dfs(root,0);
    return ans;
    }
}
