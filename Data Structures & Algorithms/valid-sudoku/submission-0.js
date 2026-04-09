class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Brute Force
    // T.C:- O(n^2) -> O(1), S.C:- O(1)
    // for(let i=0;i<9;i++)
    // {
    //     let s = new Set();
    //     for(let j=0;j<9;j++)
    //     {
    //         if(board[i][j]=='.') continue;

    //         if(s.has(board[i][j])) return false;
    //         s.add(board[i][j]);
    //     }
    // }

    // for(let i=0;i<9;i++)
    // {
    //     let s = new Set();
    //     for(let j=0;j<9;j++)
    //     {
    //         if(board[j][i]=='.') continue;

    //         if(s.has(board[j][i])) return false;
    //         s.add(board[j][i]);
    //     }
    // }
    // for(let row=0;row<9;row+=3)
    // {
    //     for(let col=0;col<9;col+=3)
    //     {
    //         let s = new Set();
    //         for(let i=0;i<3;i++)
    //         {
    //             for(let j=0;j<3;j++)
    //             {
    //                 if(board[row+i][col+j]=='.') continue;

    //                 if(s.has(board[row+i][col+j])) return false;
    //                 s.add(board[row+i][col+j]);
    //             }
    //         }
    //     }
    // }


    // Optimal/ Clean
    

    let rows = Array.from({length:9},()=>new Set())
    let cols = Array.from({length:9},()=>new Set())
    let boxes = Array.from({length:9},()=>new Set())

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){

            let val = board[i][j]

            if(val === '.') continue

            let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)

            if(rows[i].has(val) ||
               cols[j].has(val) ||
               boxes[boxIndex].has(val)){
                return false
            }

            rows[i].add(val)
            cols[j].add(val)
            boxes[boxIndex].add(val)
        }
    }

    return true
    
    }
}
