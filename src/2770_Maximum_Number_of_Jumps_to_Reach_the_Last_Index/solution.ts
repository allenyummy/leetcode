// https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/

// TC: O(N^2)
// SC: O(N)
function maximumJumps(nums: number[], target: number): number {
  const n = nums.length;
  let dp = new Array<number>(n).fill(-1);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (Math.abs(nums[i] - nums[j]) <= target) {
        if (dp[j] > -1) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  }
  return dp[n - 1];
}
