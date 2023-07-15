// https://leetcode.com/problems/longest-alternating-subarray/

// TC: O(N)
// SC: O(1)
function alternatingSubarray(nums: number[]): number {
  const n = nums.length;
  let l = 0;
  let length = -1;
  let diff = 1;
  for (let r = 1; r < n; r++) {
    if (nums[l + 1] - nums[l] != 1) {
      l += 1;
      continue;
    }
    length = Math.max(length, 2);
    diff *= -1;
    if (r + 1 < n && nums[r + 1] - nums[r] == diff) {
      length = Math.max(length, r - l + 2);
    } else {
      l = r;
      diff = 1;
    }
  }
  return length;
}
