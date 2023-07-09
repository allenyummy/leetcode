## https://leetcode.com/problems/longest-substring-without-repeating-characters/


## TC: O(N^2)
## SC: O(1)
def lengthOfLongestSubstring(s: str) -> int:
    window_size = 0
    substring = ""
    for char in s:
        if char in substring:
            window_size = max(window_size, len(substring))
            char_index = substring.index(char) ## O(N)
            substring = substring[char_index + 1 :]
        substring += char
    window_size = max(window_size, len(substring))
    return window_size


## TC: O(N)
## SC: O(N)
def lengthOfLongestSubstring2(s: str) -> int:
    seen = {}  ## key: char, value: last_seen_index
    l = 0
    length = 0
    for r, char in enumerate(s):
        if char in seen and seen[char] >= l:
            l = seen[char] + 1
        else:
            length = max(length, r - l + 1)
        seen[char] = r
    return length


if __name__ == "__main__":
    print(lengthOfLongestSubstring("dvdf"))  ## 3
    print(lengthOfLongestSubstring2("dvdf"))  ## 3
