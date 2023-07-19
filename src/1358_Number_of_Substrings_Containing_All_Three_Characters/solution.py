## https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

## TC: O(N)
## SC: O(1)
def numberOfSubstrings(s: str) -> int:
    count = {"a": 0, "b": 0, "c": 0}
    n = len(s)
    ans = 0
    l = 0
    for r, char in enumerate(s):
        count[char] += 1
        while count["a"] > 0 and count["b"] > 0 and count["c"] > 0:
            ans += n - r
            count[s[l]] -= 1
            l += 1
    return ans