// https://leetcode.com/problems/count-number-of-nice-subarrays/

// TC: O(N)
// SC: O(1)
function numberOfSubarrays(nums: number[], k: number): number {
  let l = 0;
  let countOdds = 0;
  let countNice = 0;
  let ans = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] % 2 == 1) {
      countOdds += 1;
      countNice = 0;
    }
    while (countOdds == k) {
      if (nums[l] % 2 == 1) {
        countOdds -= 1;
      }
      l += 1;
      countNice += 1;
    }
    ans += countNice;
  }
  return ans;
}
