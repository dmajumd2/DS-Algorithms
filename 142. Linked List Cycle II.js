/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Floyd's Tortoise and Hare algorithm
var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
    let intersect = getIntersection(head);
    if(intersect == null){
        return null;
    }
    
    // will return the starting point for the cycle
    //ptr1 start from head and ptr2 starts with intersection point and the meeting point will detect the starting point of cycle
    let ptr1 = head;
    let ptr2 = intersect;
    while(ptr1 != ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
};



//function returns the intersection point for hare and tortoise
var getIntersection = function(head){
    let tortoise =  head;
    let hare = head;
    
    while(hare !== null && hare.next !== null){
       tortoise = tortoise.next;
        hare = hare.next.next;
        if(tortoise == hare) {
            return tortoise;
        }
    }
    return null;
}



//hashtable java
public class Solution {
    public ListNode detectCycle(ListNode head) {
        Set<ListNode> visited = new HashSet<ListNode>();

        ListNode node = head;
        while (node != null) {
            if (visited.contains(node)) {
                return node;
            }
            visited.add(node);
            node = node.next;
        }

        return null;
    }
}