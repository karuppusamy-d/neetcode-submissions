class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (let num of nums) {
            const curr = map.get(num);
            if (curr) {
                map.set(num, curr+1);
            } else {
                map.set(num, 1);
            }
        }

        const results: [number, number][] = new Array();
        for (let [num, count] of map.entries()) {
            results.push([num, count]);
        }

        results.sort((a, b) => b[1] - a[1]);

        return results.slice(0, k).map(nums => nums[0]);
    }
}
