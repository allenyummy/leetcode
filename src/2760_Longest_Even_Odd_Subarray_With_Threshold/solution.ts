// https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/

// TC: O(N^2)
// SC: O(1)
function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let longestLength = 0;
  for (let l = 0; l <= nums.length - 1; l++) {
    if (nums[l] % 2 != 0 || nums[l] > threshold) {
      continue;
    }
    for (let r = l; r <= nums.length - 1; r++) {
      let flag = true;
      for (let i = l; i <= r - 1; i++) {
        if (
          nums[i] > threshold ||
          nums[i + 1] > threshold ||
          nums[i] % 2 == nums[i + 1] % 2
        ) {
          flag = false;
          continue;
        }
      }
      if (flag && r - l + 1 > longestLength) {
        longestLength = r - l + 1;
      }
    }
  }
  return longestLength;
}

// TC: O(N)
// SC: O(1)
function longestAlternatingSubarray2(
  nums: number[],
  threshold: number
): number {
  let l = 0;
  let length = 0;
  for (let r = 0; r <= nums.length - 1; r++) {
    if (nums[l] % 2 != 0 || nums[l] > threshold) {
      l++;
      continue;
    }
    length = Math.max(length, 1);
    if (
      r + 1 < nums.length &&
      nums[r] <= threshold &&
      nums[r + 1] <= threshold &&
      nums[r] % 2 != nums[r + 1] % 2
    ) {
      length = Math.max(length, r - l + 2);
    } else {
      l = r + 1;
    }
  }
  return length;
}
