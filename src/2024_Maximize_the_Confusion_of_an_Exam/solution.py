## https://leetcode.com/problems/maximize-the-confusion-of-an-exam/


## TC: O(N)
## SC: O(1)
def maxConsecutiveAnswers(answerKey: str, k: int) -> int:
    count = {"T": 0, "F": 0}
    l = 0
    length = 0
    for r, ans in enumerate(answerKey):
        count[ans] += 1
        while count["T"] > k and count["F"] > k:
            count[answerKey[l]] -= 1
            l += 1
        length = max(length, r - l + 1)
    return length
