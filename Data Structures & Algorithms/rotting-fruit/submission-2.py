from collections import deque

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        queue = deque()
        visited = [[False] * n for _ in range(m)]
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2 and not visited[i][j]:
                    queue.append((i, j))
                    visited[i][j] = True

        minutes = 0
        while queue:
            qlen = len(queue)
            for _ in range(qlen):
                row, col = queue.popleft()
                for dr, dc in directions:
                    new_row, new_col = row + dr, col + dc
                    if new_row >= m or new_row < 0 or new_col >= n or new_col < 0 or visited[new_row][new_col] or grid[new_row][new_col] == 0:
                        continue
                    queue.append((new_row, new_col))
                    visited[new_row][new_col] = True
            if queue:
                minutes += 1

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1 and not visited[i][j]:
                    return -1

        return minutes
            


        