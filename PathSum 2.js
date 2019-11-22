/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root){
        return [];
    }
    
    const res = [];
    
    var helper = function(node, target, prevPaths){
        prevPaths.push(node.val);
        
        if(node.left === null && node.right === null && target === node.val){
            res.push(prevPaths);
        }
        
        if(node.left){
            helper(node.left, target - node.val, prevPaths.slice());
        }
        
        if(node.right){
            helper(node.right, target - node.val, prevPaths.slice());
        }
        
    }
    
    helper(root, sum, []);
    return res;
};