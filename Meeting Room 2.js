var minMeetingRooms = function(intervals) {
   
    let sL = [];
    let eL = [];
    
    // put all first elem in sL and end elem in eL
    for(let i = 0; i < intervals.length; i++){
        let interval = intervals[i];
        sL.push(interval[0]);
        eL.push(interval[1]);
    }
  
    //sort start elem array and end elem array;
    sL.sort((a,b) => a-b);
    eL.sort((a,b) => a-b);
    
   // iterate thru both arrays and if sL elem is less than el elem than it means //meeting room is required else m--
    let i = 0, j = 0, m = 0, res = 0;
    while(i < intervals.length){
        if(sL[i] < eL[j]){
            m++;
            i++;
        } else {
            m--;
            j++;
        }
        
        res = Math.max(res, m);
    }
    return res;
};