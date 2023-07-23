## https://leetcode.com/problems/count-number-of-nice-subarrays/
from typing import List


## TC: O(N)
## SC: O(1)
def numberOfSubarrays(nums: List[int], k: int) -> int:
    count_odds = 0
    count_nice = 0
    ans = 0
    l = 0
    for num in nums:
        if num % 2 == 1:
            count_odds += 1
            count_nice = 0
        while count_odds == k:
            if nums[l] % 2 == 1:
                count_odds -= 1
            count_nice += 1
            l += 1
        ans += count_nice
    return ans
