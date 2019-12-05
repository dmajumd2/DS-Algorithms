class MyQueue {
    
    private Stack<Integer> pushStack;
    private Stack<Integer> popStack;

    /** Initialize your data structure here. */
    public MyQueue() {
        pushStack = new Stack<>();
        popStack = new Stack<>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        pushStack.push(x);  // push into stack 1
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        ensureThereAreItemsInPopStack();
        if (!popStack.isEmpty()) {
            return popStack.pop();
        }
        
        return -1;
    }
    
    /** Get the front element. */
    public int peek() {
        ensureThereAreItemsInPopStack();
        
        if (!popStack.isEmpty()) {
            return popStack.peek();
        }
        
        return -1;
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return pushStack.isEmpty() && popStack.isEmpty();
    }
    
    private void ensureThereAreItemsInPopStack() {
        if (popStack.isEmpty()) {
            populatePopStack();
        }
    }
    
    private void populatePopStack() {
        while (!pushStack.isEmpty()) {
            popStack.push(pushStack.pop());
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */