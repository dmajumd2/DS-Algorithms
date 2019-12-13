class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();
        for(int i : nums){
            minHeap.add(i);
            if(minHeap.size() > k){ // if the size of heap exceed remove the min from heap to maintain the capacity K
                minHeap.remove();
            }
        }
        
        // kth largest element in the root of min heap return it
        return minHeap.remove();
    }
}