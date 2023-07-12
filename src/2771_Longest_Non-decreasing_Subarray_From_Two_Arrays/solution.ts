// https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/

// TC: O(N)
// SC: O(1)
function maxNonDecreasingLength(nums1: number[], nums2: number[]): number {
  let res = 1;
  let dp1 = 1;
  let dp2 = 1;

  for (let i = 1; i <= nums1.length; i++) {
    let step11 = 1;
    let step12 = 1;
    let step21 = 1;
    let step22 = 1;

    if (nums1[i - 1] <= nums1[i]) {
      step11 = dp1 + 1;
    }
    if (nums1[i - 1] <= nums2[i]) {
      step12 = dp1 + 1;
    }
    if (nums2[i - 1] <= nums1[i]) {
      step21 = dp2 + 1;
    }
    if (nums2[i - 1] <= nums2[i]) {
      step22 = dp2 + 1;
    }

    dp1 = Math.max(step11, step21);
    dp2 = Math.max(step12, step22);
    res = Math.max(res, dp1, dp2);
  }

  return res;
}
