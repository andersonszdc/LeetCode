const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maximumSubarray = () => {
  let local_max = 0;
  let global_max = Number.NEGATIVE_INFINITY;

  for (i = 0; i < nums.length; i++) {
      local_max = Math.max(nums[i], nums[i] + local_max);
      console.log([nums[i], nums[i] + local_max])
    if (local_max > global_max) {
      global_max = local_max;
    }
  }
  return global_max;
};

maximumSubarray()
