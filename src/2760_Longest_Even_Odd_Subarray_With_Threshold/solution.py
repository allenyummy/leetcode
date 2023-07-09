## https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/

from typing import List


## TC: O(N)
## SC: O(1)
def longestAlternatingSubarray(nums: List[int], threshold: int) -> int:
    l = 0
    length = 0
    for r in range(len(nums)):
        if nums[l] % 2 != 0 or nums[l] > threshold:
            l += 1
            continue
        length = max(length, 1)
        if (
            r + 1 < len(nums)
            and nums[r] <= threshold
            and nums[r + 1] <= threshold
            and nums[r] % 2 != nums[r + 1] % 2
        ):
            length = max(length, r - l + 2)
        else:
            l = r + 1
    return length
