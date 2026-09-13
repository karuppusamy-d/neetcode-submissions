class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const subBoxSet = Array.from({ length: 3 }, () => new Set<string>())
        const colsSet = Array.from({ length: 9 }, () => new Set<string>())
        const rowSet = new Set<string>()

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = board[i][j];
                if (value === ".") continue;
                const subBoxIndex = Math.floor(j/3);
                const boxSet = subBoxSet[subBoxIndex];
                if (
                    boxSet.has(value) || 
                    rowSet.has(value) || 
                    colsSet[j].has(value)
                ) {
                    return false;
                } else {
                    boxSet.add(value);
                    rowSet.add(value)
                    colsSet[j].add(value)
                }
            }

            rowSet.clear();
            if ((i + 1) % 3 === 0) {
                // reset subBoxSet
                subBoxSet.forEach(set => set.clear());
            }
        }

        return true;
    }
}
