## https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

from typing import List


## TC: O(N)
## SC: O(1)
def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
    n = len(arr)
    l = r = 0
    summary = arr[r]
    count = 0
    while r < n:
        if r - l + 1 < k:
            r += 1
            summary += arr[r]
        else:
            if summary / k >= threshold:
                count += 1
            summary -= arr[l]
            l += 1
            r += 1
            if r <= n - 1:
                summary += arr[r]
    return count
