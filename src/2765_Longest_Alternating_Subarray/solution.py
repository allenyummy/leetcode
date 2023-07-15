## https://leetcode.com/problems/longest-alternating-subarray/

from typing import List


## TC: O(N)
## SC: O(1)
def alternatingSubarray(nums: List[int]) -> int:
    n = len(nums)
    l = 0
    length = -1
    start_flag = flag = 1
    for r in range(1, n):
        if nums[l + 1] - nums[l] != start_flag:
            l += 1
            continue

        length = max(length, 2)
        flag *= -1

        if r + 1 < n and nums[r + 1] - nums[r] == flag:
            length = max(length, r - l + 2)
        else:
            l = r
            flag = 1

    return length
