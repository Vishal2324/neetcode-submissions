class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map = {}
        if len(s) != len(t):
            return False
        for i in s:
            map[i] = map.get(i, 0)
            map[i] += 1
        
        for j in t:
            map[j] = map.get(j, 0)
            map[j] -= 1
            if map[j] < 0:
                return False
        
        return True