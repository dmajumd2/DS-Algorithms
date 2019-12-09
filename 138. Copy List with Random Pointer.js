/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const dummy = new Node(NaN, null, null); 
    
    let original = head;
    let copy =  dummy;
    
    const map =  new Map();
    
    //first copy the nodes on its own following the next
    while(original){
        let newNode = new Node(original.val, null, null);
        copy.next = newNode;  // copy node connecting with next
        map.set(original, newNode); // setting the original and new node in hashmap
        
        copy = copy.next;
        original = original.next;
    }
    
    // as copy and dummy is at the end moving it again to beggining
    copy = dummy.next;
    original = head;
    
    //checking the random from the hashmap from the key(original) and giving it to copy node
    while(original){
        if (original.random) {
            copy.random = map.get(original.random)
        }
        copy = copy.next
        original = original.next
    }
    
    return dummy.next;
};