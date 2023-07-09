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
