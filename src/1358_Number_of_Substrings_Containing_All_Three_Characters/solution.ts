// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// TC: O(N)
// SC: O(1)
function numberOfSubstrings(s: string): number {
  const count: { [key: string]: number } = { a: 0, b: 0, c: 0 };
  const n = s.length;
  let ans = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    count[s[r]] += 1;
    while (count["a"] > 0 && count["b"] > 0 && count["c"] > 0) {
      ans += n - r;
      count[s[l]] -= 1;
      l += 1;
    }
  }
  return ans;
}
