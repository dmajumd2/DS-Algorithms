/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = [];
    this.map = {};  //{val : index}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] !== undefined){
        return false;
    }
    this.nums.push(val);
    this.map[val] = this.nums.length - 1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    //check if exist or not
     if(this.map[val] === undefined){
        return false;
    }
    //if exist get the position from map
    var idx = this.map[val];
    var n = this.nums.length;
    if(idx !== n - 1){
        //swap last elem with the val from map in array
        this.nums[idx] = this.nums[n-1];
        
        // update map for both the swaped elements index
        this.map[this.nums[n-1]] = idx;
        this.map[val] = n-1;
        
        //put new value to last elem after swap
        this.nums[n-1] = val;
    }
    this.nums.pop();
    //delete from map
    delete this.map[val];
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let count = 0, n = this.nums.length, res;
    
    // this is for same probability to all numbers in array else one no. will repeat
    for(i = 0; i < n; i++){
        count++;
        var idx = Math.floor(Math.random() * count);
        if(idx === 0){
            res = i;
        }
    }
    return this.nums[res];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */