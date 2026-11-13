class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        left = 0
        best = 0
        for i, ch in enumerate(s):
            if ch in seen:
                j = left
                while ch in seen:
                    seen.remove(s[j])
                    j += 1
                left = j
            seen.add(ch)
            best = max(best, len(seen))
        return best
        