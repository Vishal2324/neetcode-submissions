class Solution:
    def solve(self, board: List[List[str]]) -> None:
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        m, n = len(board), len(board[0])
        border_zero = set()
        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0 or i == m - 1 or j == n - 1:
                    if board[i][j] == "O":
                        border_zero.add((i, j))

        visited = [[False] * n for _ in range(m)]

        excluded = set()

        def dfs(i, j):
            visited[i][j] = True
            for dr, dc in directions:
                new_row, new_col = i + dr, j + dc
                if (0 < new_row < m) and (0 < new_col < n) and not visited[new_row][new_col] and board[new_row][new_col] == "O":
                    excluded.add((new_row, new_col))
                    dfs(new_row, new_col)

        for i, j in border_zero:
            excluded.add((i, j))
            dfs(i, j)

        print(excluded)

        for i in range(m):
            for j in range(n):
                if (i, j) not in excluded and board[i][j] == "O":
                    board[i][j] = "X"


