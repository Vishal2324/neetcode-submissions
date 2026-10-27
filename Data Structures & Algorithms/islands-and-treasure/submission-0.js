class Solution {
    /**
     * @param {number[][]} grid
     */

    childrens = [
        [1, 0], 
        [-1, 0], 
        [0, 1], 
        [0, -1]
    ]

    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const visited = Array.from({ length: m }, () => new Array(n).fill(false));
        const queue = [];
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === 0){
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }
        let dist = 0;
        while(queue.length){
            const qSize = queue.length;
            for(let k = 0; k < qSize; k++){
                const [r, c] = queue.shift();
                grid[r][c] = dist;
                for(let neighbor of this.childrens){
                    const [a, b] = neighbor;
                    if(
                        (a + r) < 0 || (a + r) >= m || 
                        (b + c) < 0 || (b + c) >= n || 
                        grid[a + r][b + c] === -1 ||
                        visited[a + r][b + c]
                    ){
                        continue;
                    }
                    queue.push([a + r, b + c]);
                    visited[a + r][b + c] = true;
                }
            }
            dist++;
        }

    }
}
