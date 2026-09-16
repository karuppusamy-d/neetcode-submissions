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

        let result = 0;
        for (let num of seq) {
            let len = 1;
            let itr = num;
            while (set.has(++itr)) {
                len++;
            }
            if (len > result) result = len;
        }
        
        return result;
    }
}
