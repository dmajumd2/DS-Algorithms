/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levelOrder = [];  //The list to hold the level by level layers of the tree
    if(root === null){
        return levelOrder;
    }
    
    let queue = [];  //Our queue to enforce a traversal in a breadth-first manner
    
    queue.unshift(root); //Add the root node to start the breadth first search
    
    while(queue.length){
        let currentLayer = []; // current layer array for adding into parent array
        
        let queueSize = queue.length;
        
        for(let i = 0 ; i < queueSize; i++){
            
            //Remove the nodes so that we can process it
            let currentNode = queue.pop();
            
            //Add the node's value to the current layer list
            currentLayer.push(currentNode.val);
            
            //If this node has a left add it to be processed for the next layer      
            if (currentNode.left !== null) {
                queue.unshift(currentNode.left);
            }
            
            if (currentNode.right !== null) {
                queue.unshift(currentNode.right);
            }
        }
        
        // pushing into the out array [3], [9,20] level by level
        levelOrder.push(currentLayer);
        
    }
    return levelOrder;
};