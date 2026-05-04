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
     * @return {number[][]}
     */
    levelOrder(root) {
        let ans = [];
    if(!root) return [];

    let que = [];
    que.push(root);

    while(que.length > 0)
    {
        let arr = [];
        let size = que.length;
        for(let i=0;i<size;i++)
        {
            let v = que.shift();
            arr.push(v.val);
            if(v.left)
            {
                
                que.push(v.left);
                
                
            }
            if(v.right)que.push(v.right);
        }
        if(arr.length>0) ans.push(arr);
    }
    return ans;
    }
}
