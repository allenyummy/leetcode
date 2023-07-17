// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

// TC: O(N)
// SC: O(1)
function longestSubarray(nums: number[]): number {
  let l = 0;
  let countZero = 0;
  let length = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] == 0) {
      countZero += 1;
    }
    while (countZero > 1) {
      if (nums[l] == 0) {
        countZero -= 1;
      }
      l += 1;
    }
    length = Math.max(length, r - l);
  }
  return length;
}
