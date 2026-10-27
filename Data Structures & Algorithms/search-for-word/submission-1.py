class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        row = len(board)
        col = len(board[0])

        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = [ [False] * col for _ in range(row) ]

        def dfs(i, j, current):
            if current == len(word):
                return True
            if current >= len(word) or i < 0 or i >= row or j < 0 or j >= col:
                return False
            if visited[i][j] or board[i][j] != word[current]:
                return False
            visited[i][j] = True    
            for dr, dc in directions:
                new_row, new_col = i + dr, j + dc;
                if dfs(new_row, new_col, current + 1):
                    return True

            visited[i][j] = False                
            return False


        current = 0
        for i in range(row):
            for j in range(col):
                if board[i][j] == word[0]:
                    if dfs(i, j, 0):
                        return True
        
        return False