# https://leetcode.com/problems/two-sum/

from typing import List

## TC: O(N)
## SC: O(N)
def method(nums: List[int], target: int) -> List[int]:
    hash_map = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff not in hash_map:
            hash_map[num] = i
        else:
            return [i, hash_map[diff]]
    return []


if __name__ == "__main__":
    print(method([2, 7, 11, 15], 9))  ## [1, 0]
