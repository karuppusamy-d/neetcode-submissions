class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max=0;

        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const width = right - left;
            const volume = Math.min(heights[left], heights[right]) * width
            if (volume > max) max = volume;
            if (heights[left] <= heights[right]) {
                left++
            } else {
                right--;
            }
        }

        return max;
    }
}
