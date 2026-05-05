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
    goodNodes(root) {
            if(!root) return 0;

    // DFS
    // T.C:- O(n), S.C:- O(1)
    // let ans =0;
    // function dfs(node, rootVal)
    // {
    //     if(node.val >= rootVal) {
    //         rootVal= node.val;
    //         ans++;
    //     }

    //     if(node.left) dfs(node.left, rootVal);
    //     if(node.right) dfs(node.right, rootVal);
    // }
    // dfs(root, -Infinity);
    // return ans;

    // BFS
    // T.C:- O(n), S.C:- O(n)
    let res = 0;
    let q = new Queue();
    q.push([root, -Infinity]);

    while(!q.isEmpty())
    {
        let [node, maxVal] = q.pop();

        if(node.val>=maxVal)res++;

        if(node.left)
        {
            q.push([node.left, Math.max(maxVal,node.val)])
        }
        if(node.right)
        {
            q.push([node.right, Math.max(maxVal,node.val)])
        }
    }

    return res;
    }
}
