var invertTree = function(root) {
    swap(root);
    return root;
};

var swap = function(root){
    if(!root) return;
    
    //post order traversal
    if(root.left) swap(root.left);
    if(root.right) swap(root.right);
    
    //swaping the nodes
    let current;
    current = root.left;
    root.left = root.right;
    root.right = current;
}