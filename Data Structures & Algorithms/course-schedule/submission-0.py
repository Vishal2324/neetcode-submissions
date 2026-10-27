class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        ad_list: Dict[str, List[int]] = { i: [] for i in range(numCourses)}
        for edge in prerequisites:
            [a, b] = edge
            ad_list[a].append(b)
        print(ad_list)
        visited = set()
        def dfs(crs):
            print("dfs", crs)
            if crs in visited:
                return False
            if ad_list[crs] == []:
                return True
            
            visited.add(crs)
            for pre in ad_list[crs]:
                if not dfs(pre): 
                    return False
            visited.remove(crs)
            ad_list[crs] = []
            return True

        for num in range(numCourses):
            if not dfs(num):
                return False

        return True