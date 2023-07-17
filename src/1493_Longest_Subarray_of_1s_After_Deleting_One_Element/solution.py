## https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

from typing import List


## TC: O(N)
## SC: O(1)
def longestSubarray(nums: List[int]) -> int:
    countZero = 0
    l = 0
    length = 0
    for r, num in enumerate(nums):
        if num == 0:
            countZero += 1
        while countZero > 1:
            if nums[l] == 0:
                countZero -= 1
            l += 1
        length = max(length, r - l)
    return length
