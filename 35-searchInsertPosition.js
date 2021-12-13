const searchInsert = (nums, target) => {
    let startIndex = 0
    let endIndex = nums.length - 1

    while (startIndex <= endIndex) {

        let pivot = Math.floor((startIndex + endIndex)/2)

        if (nums[pivot] === target) {
            return pivot
        } else if (nums[pivot] < target) {
            startIndex = pivot + 1
        } else {
            endIndex = pivot - 1
        }
    }

    // if target isn't in nums
    nums.push(target)
    nums.sort((a, b) => a - b)

    return nums.indexOf(target)
}

console.log(searchInsert([1, 2, 4], 3))