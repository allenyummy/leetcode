## https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/


def countGoodSubstrings(s: str) -> int:
    window_size = 3
    l = 0
    r = 0
    n = len(s)
    count = 0
    while r < n:
        if r - l + 1 < window_size:
            r += 1
        elif r - l + 1 == window_size:
            if s[l] != s[l + 1] and s[l] != s[l + 2] and s[l + 1] != s[l + 2]:
                count += 1
            l += 1
            r += 1
    return count
