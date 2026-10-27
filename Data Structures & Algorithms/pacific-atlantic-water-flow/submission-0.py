from collections import deque

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        p_queue, a_queue = deque(), deque()
        p_seen, a_seen = set(), set()
        m, n = len(heights), len(heights[0])
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(n):
            p_queue.append((0, i))
            p_seen.add((0, i))

        for j in range(1, m):
            p_queue.append((j, 0))
            p_seen.add((j, 0))

        for i in range(m):
            a_queue.append((i, n - 1))
            a_seen.add((i, n - 1))

        for j in range(n - 1):
            a_queue.append((m - 1, j))
            a_seen.add((m - 1, j))

        def get_coords(que, seen):
            coords = set()
            while que:
                i, j = que.popleft()
                coords.add((i, j))
                for i_off, j_off in directions:
                    new_row, new_col = i + i_off, j + j_off
                    if (0 <= new_row < m) and (0 <= new_col < n) and not (new_row, new_col) in seen and heights[new_row][new_col] >= heights[i][j]:
                        que.append((new_row, new_col))
                        seen.add((new_row, new_col))
            return coords

        p_coords = get_coords(p_queue, p_seen)
        a_coords = get_coords(a_queue, a_seen)

        return list(p_coords.intersection(a_coords))

        