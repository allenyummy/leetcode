## https://leetcode.com/problems/longest-substring-without-repeating-characters/


## TC: O(N^2)
## SC: O(N)
def lengthOfLongestSubstring(s: str) -> int:
    window_size = 0
    substring = ""
    for char in s:
        if char in substring:
            window_size = max(window_size, len(substring))
            char_index = substring.index(char)
            substring = substring[char_index + 1 :]
        substring += char
    window_size = max(window_size, len(substring))
    return window_size


if __name__ == "__main__":
    print(lengthOfLongestSubstring("dvdf"))  ## 3
