// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/

// TC: O(N)
// SC: O(1)
function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const count: { [key: string]: number } = { T: 0, F: 0 };
  let l = 0;
  let length = 0;
  for (let r = 0; r < answerKey.length; r++) {
    count[answerKey[r]] += 1;
    while (count["T"] > k && count["F"] > k) {
      count[answerKey[l]] -= 1;
      l += 1;
    }
    length = Math.max(length, r - l + 1);
  }
  return length;
}
