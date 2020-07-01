function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = nums1.concat(nums2).sort((a, b) => (a > b ? 1 : -1));

  const halfWay = nums.length / 2;

  const isEven = nums.length % 2 === 0;

  if (isEven) {
    return (nums[halfWay - 1] + nums[halfWay]) / 2;
  } else {
    const index = Math.floor(halfWay);
    const result = nums[index];

    return result;
  }
}

// console.log(findMedianSortedArrays([1, 3], [2]), 2);
// console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
console.log(findMedianSortedArrays([3], [-2, -1]), -1.0);
