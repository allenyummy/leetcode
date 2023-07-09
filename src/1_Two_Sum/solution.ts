// https://leetcode.com/problems/two-sum/

// TC: O(N)
// SC: O(N)
function twoSum(nums: number[], target: number): number[] {
  const hash_map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    const diff = target - nums[i];
    if (hash_map.has(diff)) {
      return [i, hash_map.get(diff)];
    }
    hash_map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
