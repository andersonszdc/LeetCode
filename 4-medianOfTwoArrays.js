const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  console.log(mergedArray);

  const median = mergedArray.length / 2;
  console.log(median);

  if (mergedArray.length % 2 == 0) {
    const num1 = mergedArray[median - 1];
    console.log(num1);
    const num2 = mergedArray[median];
    console.log(num2);
    return (num1 + num2) / 2;
  } else {
    console.log(Math.ceil(median) - 1);
    return mergedArray[Math.ceil(median) - 1];
  }
};

let nums1 = [1, 3];
let nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
