from collections import deque

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        m = len(grid)
        n = len(grid[0])
        visited = [[False] * n for _ in range(m)]
        directions = [
            (0, 1),
            (0, -1),
            (1, 0),
            (-1, 0)
        ]

        def bfs(start_i: int, start_j: int):
            queue = deque([(start_i, start_j)])
            visited[start_i][start_j] = True
            while queue:
                row, col = queue.popleft()
                for dr, dc in directions:
                    new_row, new_col = row + dr, col + dc

                    if (0 <= new_row < m and 0 <= new_col < n and grid[new_row][new_col] == "1" and not visited[new_row][new_col]):
                        queue.append((new_row, new_col))
                        visited[new_row][new_col] = True

        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1" and not visited[i][j]:
                    bfs(i, j)
                    islands += 1
        
        return islands

        