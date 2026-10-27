class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    childrens = [ [0, 1], [-1, 0], [1, 0], [0, -1] ];

    bfs(grid, m, n, visited, i, j){
        let count = 0;
        const queue = [];
        visited[i][j] = true;
        queue.push([i, j]);
        while(queue.length){
            const [a, b] = queue.shift();
            count++;
            for(let k = 0; k < this.childrens.length; k++){
                const [c, d] = this.childrens[k];
                if((a + c) >= 0 && (a + c) < m && (b + d) >= 0 && (b + d) < n){
                    if(grid[a + c][b + d] === 1 && !visited[a + c][b + d]){
                        queue.push([a + c, b + d]);
                        visited[a + c][b + d] = true;
                    }
                }
            }
        }
        return count;
    }

    maxAreaOfIsland(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let max = 0;
        let visited = Array.from({ length: m }, () => new Array(n).fill(false));
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === 1 && !visited[i][j]){
                    const area = this.bfs(grid, m, n, visited, i, j);
                    max = Math.max(area, max);
                }
            }   
        }
        return max;
    }
}
