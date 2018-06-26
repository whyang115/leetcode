const twoSum = (nums,target) => {
    for(let i = 0; i < nums.length; i++) {
        let ind = nums.indexOf(target - nums[i])
       if(ind > 0 && ind !== i) return [i,ind]
    }
    
   return false
}

console.log(twoSum([2,7,3,6],9))