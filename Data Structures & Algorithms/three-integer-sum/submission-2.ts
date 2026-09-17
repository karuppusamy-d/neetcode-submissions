class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const len = nums.length;

        // [-4,-1,-1,0,1,2]
        const sorted = nums.sort((a, b) => a - b);

        const result: [number, number, number][] = [];
        
        for (let i = 0; i < len - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            const num = sorted[i];
            const target = 0 - num;

            let start = i + 1;
            let end = len - 1;            
            while (start < end) {
                const sum = sorted[start] + sorted[end];
                if (sum === target) {
                    result.push([num, sorted[start], sorted[end]]);
                    while (start < end && sorted[start] === sorted[start + 1]) start++;
                    while (start < end && sorted[end] === sorted[end - 1]) end--;
                    start++;
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }

        return result;
    }
}
