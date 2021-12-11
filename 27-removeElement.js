// solution 1

const removeElement = function (nums, val) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
};

// solution 2

const removeElement2 = function (nums, val) {
    let k = 0;
    nums.forEach((i) => {
        if (i !== val) {
            nums[k] = i;
            k++;
        }
    });
    return k;
};
