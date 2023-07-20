## https://leetcode.com/problems/max-consecutive-ones-iii/

from typing import List


## TC: O(N)
## SC: O(1)
def longestOnes(nums: List[int], k: int) -> int:
    l = 0
    count = {1: 0, 0: 0}
    length = 0
    for r, num in enumerate(nums):
        count[num] += 1
        while count[0] > k:
            if nums[l] == 0:
                count[0] -= 1
            l += 1
        length = max(length, r - l + 1)
    return length
