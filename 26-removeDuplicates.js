const nums = [1, 1, 2]

const RemoveDuplicates = (nums) => {
    let count = 0
    for (i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue
        }
        nums[count] = nums[i]
        count++
    }
    return count
}

console.log(RemoveDuplicates(nums))