// https://leetcode.com/problems/max-consecutive-ones-iii/

// TC: O(N)
// SC: O(1)
function longestOnes(nums: number[], k: number): number {
  const count: { [key: number]: number } = { 1: 0, 0: 0 };
  let l = 0;
  let length = 0;
  for (let r = 0; r < nums.length; r++) {
    count[nums[r]] += 1;
    while (count[0] > k) {
      if (nums[l] == 0) {
        count[0] -= 1;
      }
      l += 1;
    }
    length = Math.max(length, r - l + 1);
  }
  return length;
}
