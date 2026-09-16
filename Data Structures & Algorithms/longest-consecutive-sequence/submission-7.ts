class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);

        const seq = new Set<number>();
        for (let num of set) {
            if (!set.has(num-1)) {
                seq.add(num);
            }
        }

        let longest = 0;
        for (let num of seq) {
            let len = 0;
            let itr = num;
            while (set.has(itr)) {
                len++;
                itr++;
            }
            longest = Math.max(len, longest)
        }
        
        return longest;
    }
}
