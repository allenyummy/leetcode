// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// TC: O(N)
// SC: O(1)

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  const target = k * threshold;
  let l = 0;
  let summary = 0;
  let count = 0;

  for (let r = 0; r < n; r++) {
    summary += arr[r];
    if (r - l + 1 < k) continue;
    if (summary >= target) count += 1;
    summary -= arr[l];
    l += 1;
  }

  return count;
}
