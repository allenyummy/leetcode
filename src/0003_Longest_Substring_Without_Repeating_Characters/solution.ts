// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// TC: O(N^2)
// SC: O(N)
function lengthOfLongestSubstring(s: string): number {
  let window_size = 0;
  let look_up = [];
  for (let i = 0; i <= s.length - 1; i++) {
    const index = look_up.indexOf(s[i]);
    if (index > -1) {
      window_size = Math.max(look_up.length, window_size);
      look_up = look_up.slice(index + 1, look_up.length);
    }
    look_up.push(s[i]);
  }
  window_size = Math.max(look_up.length, window_size);
  return window_size;
}

// TC: O(N)
// SC: O(N)
function lengthOfLongestSubstring2(s: string): number {
  const seen = new Map<string, number>();
  let l = 0;
  let length = 0;
  for (let r = 0; r <= s.length - 1; r++) {
    const char = s[r];
    if (seen.has(char) && seen.get(char) >= l) {
      l = seen.get(char) + 1;
    } else {
      length = Math.max(length, r - l + 1);
    }
    seen.set(char, r);
  }
  return length;
}
