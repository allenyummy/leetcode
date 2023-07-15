## https://leetcode.com/problems/relocate-marbles/

from typing import List


## TC: O(NlogN)
## SC: O(N)
def relocateMarbles(
    self, nums: List[int], moveFrom: List[int], moveTo: List[int]
) -> List[int]:
    s = set(nums)
    for f, t in zip(moveFrom, moveTo):
        s.remove(f)     ## O(1)
        if t not in s:  ## O(1)
            s.add(t)    ## O(1)

    return sorted(list(s))
