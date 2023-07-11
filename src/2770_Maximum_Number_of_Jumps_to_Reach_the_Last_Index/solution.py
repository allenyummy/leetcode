## https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/

from typing import List

## TC: O(N^2)
## SC: O(N)
def maximumJumps(nums: List[int], target: int) -> int:
    n = len(nums)
    dp = [-1] * n
    dp[0] = 0
    for i in range(1, n):
        for j in range(i - 1, -1, -1):
            if abs(nums[i] - nums[j]) <= target:
                if dp[j] > -1:
                    dp[i] = max(dp[i], dp[j] + 1)
    return dp[-1]
