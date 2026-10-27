from collections import deque

class Solution:
    def __init__(self):
        self.childs = [
            (0, 1),
            (0, -1),
            (1, 0),
            (-1, 0)
        ]

    def bfs(self, grid, i, j, visited, m, n):
        queue = deque()
        queue.append((i, j))
        visited[i][j] = True
        while queue:
            a, c = queue.popleft()
            for b, d in self.childs:
                if a + b >= 0 and a + b < m and c + d >= 0 and c + d < n:
                    if(grid[a + b][c + d] == "1" and not visited[a + b][c + d]):
                        queue.append((a + b, c + d));
                        visited[a + b][c + d] = True


    def numIslands(self, grid: List[List[str]]) -> int:
        res = 0
        m = len(grid)
        n = len(grid[0])
        visited = [[False] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1" and not visited[i][j]:
                    self.bfs(grid, i, j, visited, m, n)
                    res += 1
        
        return res

        