/*

4. Median of Two Sorted Arrays
Hard
Topics
Companies
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


**/

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArrays = [...nums1, ...nums2];
  mergedArrays.sort((a, b) => a - b);

  if (mergedArrays.length % 2 == 0) {
    let mid = mergedArrays.length / 2;

    return (mergedArrays[mid - 1] + mergedArrays[mid]) / 2;
  } else {
    let mid = Math.floor(mergedArrays.length / 2);
    return mergedArrays[mid];
  }
};

// console.log("##", findMedianSortedArrays([1, 3], [2]));
// console.log("##", findMedianSortedArrays([1, 2], [3, 4]));
console.log(
  "##",
  findMedianSortedArrays(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  )
);
