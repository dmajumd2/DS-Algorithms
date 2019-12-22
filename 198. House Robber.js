var rob = function(nums) {
    
    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        dp[i+1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    
    return dp[nums.length];
    
};