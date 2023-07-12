## https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/

from typing import List


## TC: O(N)
## SC: O(1)
def maxNonDecreasingLength(nums1: List[int], nums2: List[int]) -> int:
    ## dp1 = maximum steps ending at nums1[i]
    ## dp2 = maximum steps ending at nums2[i]

    res = dp1 = dp2 = 1
    for i in range(1, len(nums1)):
        ## ending at nums1
        steps11 = dp1 + 1 if nums1[i - 1] <= nums1[i] else 1
        steps21 = dp2 + 1 if nums2[i - 1] <= nums1[i] else 1

        ## ending at nums2
        steps12 = dp1 + 1 if nums1[i - 1] <= nums2[i] else 1
        steps22 = dp2 + 1 if nums2[i - 1] <= nums2[i] else 1

        dp1 = max(steps11, steps21)
        dp2 = max(steps12, steps22)

        ## record
        res = max(res, dp1, dp2)

    return res
