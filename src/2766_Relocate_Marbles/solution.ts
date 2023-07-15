// https://leetcode.com/problems/relocate-marbles/

// TC: O(NlogN)
// SC: O(N)
function relocateMarbles(
  nums: number[],
  moveFrom: number[],
  moveTo: number[]
): number[] {
  let numsSet = new Set<number>(nums);
  let moveN = moveFrom.length;
  for (let i = 0; i < moveN; i++) {
    let f = moveFrom[i];
    let t = moveTo[i];
    numsSet.delete(f);
    if (!numsSet.has(t)) {
      numsSet.add(t);
    }
  }
  let numsArr = Array.from(numsSet).sort((n1, n2) => n1 - n2);
  return numsArr;
}
