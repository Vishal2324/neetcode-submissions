class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False
        
        ad_list = { i:[] for i in range(n) }
        for a, b in edges:
            ad_list[a].append(b)
            ad_list[b].append(a)

        visit = set()

        def dfs(source, parent):
            visit.add(source)
            for k in ad_list[source]:
                if k == parent:
                   continue
                if k in visit:
                    return False
                if not dfs(k, source): 
                    return False

            return True

        if not dfs(0, -1):
            return False

        return len(visit) == n