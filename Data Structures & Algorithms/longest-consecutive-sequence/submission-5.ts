class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);

      
        let longest = 0;
        for (let num of set) {
            if (!set.has(num-1)) {
                let len = 1;
                while (set.has(++num)) {
                    len++;
                }
                longest = Math.max(len, longest)
            }
            
        }

        return longest;
    }
}
