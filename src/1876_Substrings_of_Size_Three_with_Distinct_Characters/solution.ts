// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

function countGoodSubstrings(s: string): number {
  const window_size = 3;
  let l = 0;
  let r = 0;
  const n = s.length;
  let count = 0;
  while (r < n) {
    if (r - l + 1 < window_size) {
      r += 1;
    } else if (r - l + 1 == window_size) {
      if (s[l] != s[l + 1] && s[l] != s[l + 2] && s[l + 1] != s[l + 2]) {
        count += 1;
      }
      l += 1;
      r += 1;
    }
  }
  return count;
}
