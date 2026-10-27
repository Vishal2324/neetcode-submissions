class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = {};
        const columnMap = {};
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let j = 0; j < row.length; j++) {
                if(row[j] !== "."){
                    if(rowMap.hasOwnProperty(`${i+1}:${row[j]}`)){
                        return false;
                    }

                    if(columnMap.hasOwnProperty(`${j+1}:${row[j]}`)){
                        return false;
                    }

                    rowMap[`${i+1}:${row[j]}`] = true;
                    columnMap[`${j+1}:${row[j]}`] = true;
                }
            }
        }

        for (let square = 0; square < 9; square++) {
            const map = {};
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (map.hasOwnProperty(board[row][col])) return false;
                    map[board[row][col]] = true;
                }
            }
        }

        return true;
    }
}
