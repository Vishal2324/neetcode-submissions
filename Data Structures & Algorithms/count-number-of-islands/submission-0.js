class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    childrens = [
        [0, 1], [0, -1], [-1, 0], [1, 0]
    ]

    bfs(grid, m, n, visited, i, j){
        const queue = [];
        queue.push([i, j]);
        let head = 0;
        while(head < queue.length){
            const [a, b] = queue[head++];
            visited[a][b] = true;
            for(let k = 0; k < this.childrens.length; k++){
                const [c, d] = this.childrens[k];
                if((a + c) >= 0 && (a + c) < m && (b + d) >= 0 && (b + d) < n){
                    if(grid[a + c][b + d] === "1" && !visited[a + c][b + d]){
                        queue.push([a + c, b + d]);
                    }
                }
            }
        }
    }

    numIslands(grid) {
        let res = 0;
        let m = grid.length;
        let n = grid[0].length;
        let visited = Array.from({ length: m }, () => new Array(n).fill(false));
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === "1" && !visited[i][j]){
                    this.bfs(grid, m, n, visited, i, j);
                    res++;
                }
            }
        }
        return res;
    }
}
