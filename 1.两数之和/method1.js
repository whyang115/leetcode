const twoSum = (nums,target) => {
    if(nums && nums.length < 2) return false
    for(let i = 0; i < nums.length; i++ ) {
        for(let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [nums[i],nums[j]]
        }
    }
    return false
}
console.log(twoSum([2,7,11,15],9))