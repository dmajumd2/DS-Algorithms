/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var nums = [];
    smallestElement(root, nums);    
    return nums[k - 1];
};


// inorder traversal will put the values in ascending order and kth value from start will be the value
var smallestElement = function(root, nums){
     if(root === null) {
         return;
        }
      smallestElement(root.left, nums);
      nums.push(root.val);
      smallestElement(root.right, nums);
    };
    
