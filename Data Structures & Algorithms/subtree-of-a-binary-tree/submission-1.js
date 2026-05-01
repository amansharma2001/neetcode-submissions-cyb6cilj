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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // DFS 
    // T.C:- O(m*n), S.C:- O(m+n)
    // if(!subRoot) return true;

    // if(!root) return false;

    // if(isSame(root, subRoot)) return true;
    // return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    // function isSame(root,subRoot){
    //     if(!root && !subRoot) return true;

    //     if(root && subRoot && root.val == subRoot.val)
    //     {
    //         return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
    //     }
    //     return false;
    // }

    // Optimal
    // Preorder 
    const serialize = (node) => {
        if (!node) return "N";
        return `(${node.val},${serialize(node.left)},${serialize(node.right)})`;
    };

    const rootSerialized = serialize(root);
    const subRootSerialized = serialize(subRoot);
    return rootSerialized.includes(subRootSerialized);
    }
}
