from collections import deque

class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        queue = deque()

        for i in range(m):
            for j in range(n):
                if(grid[i][j] == 0 and not visited[i][j]):
                    queue.append((i, j))
                    visited[i][j] = True

        dist = 0

        while queue:
            for item in list(queue):
                row, col = queue.popleft()
                grid[row][col] = dist
                for dr, dc in directions:
                    new_row, new_col = row + dr, col + dc
                    if new_row < 0 or new_row >= m or new_col < 0 or new_col >= n or visited[new_row][new_col] or grid[new_row][new_col] == -1:
                        continue
                    queue.append((new_row, new_col))
                    visited[new_row][new_col] = True
            dist += 1