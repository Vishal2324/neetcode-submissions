class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    childrens = [
        [1, 0], 
        [-1, 0], 
        [0, 1], 
        [0, -1]
    ]

    orangesRotting(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const queue = [];
        const visited = Array.from({ length: m }, () => new Array(n).fill(false));
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === 2 && !visited[i][j]){
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }

        let max = 0;
        let minutes = 0;
        while(queue.length){
            const qLen = queue.length;
            for(let k = 0; k < qLen; k++){
                const [r, c] = queue.shift();
                max = Math.max(max, minutes);
                for(let neighbor of this.childrens){
                    const [a, b] = neighbor;
                    if(
                        (a + r) < 0 || (a + r) >= m || 
                        (b + c) < 0 || (b + c) >= n || 
                        grid[a + r][b + c] === 0 ||
                        visited[a + r][b + c]
                    ){
                        continue;
                    }
                    queue.push([a + r, b + c]);
                    visited[a + r][b + c] = true;
                }
            }
            minutes++;
        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === 1 && !visited[i][j]){
                    return -1
                }   
            }
        }

        return max;
    }
}
