class LRUCache {
    
    Map<Integer, ListNode> hashtable = new HashMap<Integer, ListNode>();
    ListNode head;
    ListNode tail;
    
    int totalCacheItems;
    int maxcapacity;
    
    public LRUCache(int capacity) {
        
        //cache capacity sets by client and items starts with empty
        totalCacheItems = 0;
        this.maxcapacity = capacity;
        
        //dummy head and tails
        head = new ListNode();
        tail = new ListNode();
        
        //connect head and tail together
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        //get the element from hashtable 
        ListNode node = hashtable.get(key);
        
        if(node == null){
            return -1;
        }
        
        // Item has been accessed. Move to the front of the cache
        moveToHead(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        ListNode node = hashtable.get(key);
        //create a new entry if node is not found in hashmap
        if(node == null){
            ListNode newNode = new ListNode();
            newNode.key = key;
            newNode.value =value;
            
            // Add to the hashtable and the actual list that represents the cache
            hashtable.put(key, newNode);
            addToFront(newNode);
            
            //after adding add 1 to totalCacheItems
            totalCacheItems++;
            
            //check if totalCacheItems is more than capacity
            if(totalCacheItems > maxcapacity){
                removeFromEnd();
            }  
        } else {
            // If item is found in the cache, just update it and move it to the head of the list
            node.value = value;
            moveToHead(node);
        }
    }
    
    
    private void removeFromEnd(){
        
        //get the tail prev which is the last node to be removed from DLL and call remove from list function to remove
        ListNode tailItem = tail.prev;
        removeFromList(tailItem);
        
        //remove the entry from hashtable
        hashtable.remove(tailItem.key);
        --totalCacheItems;
    }
    
    private void moveToHead(ListNode node) {
        //if we are accessing the node the we have to add to the front of the list as it is recently used and need to remove from its original place 
        removeFromList(node);
        addToFront(node);
    }
    
    private void addToFront(ListNode node) {
        //wire the node prev to head then node next to heads next
        node.prev = head;
        node.next = head.next;
        
        //wire the head next prev to node and the connect head to node
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeFromList(ListNode node){
        //for removing save the node prev and next 
        ListNode reservePrev = node.prev;
        ListNode reserveNext = node.next;
        
        // with the help of reserve, connect node prev to node next
        reservePrev.next = reserveNext;
        reserveNext.prev = reservePrev;  
    }
    
    //creating a class for doubly linked lists
    private class ListNode {
        int key;
        int value;
        
        ListNode prev;
        ListNode next;
    } 
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */