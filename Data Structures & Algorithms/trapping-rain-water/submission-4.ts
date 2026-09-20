class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const size = height.length;
        const prefix = new Array(size).fill(0);
        const suffix = new Array(size).fill(0);

        let l=0;
        for (let r=1; r < size; r++) {
            if (height[r] >= height[l]) {
                const max = Math.min(height[l], height[r])
                let maxVol = 0
                if (max <= 0) {
                    l = r;
                    continue;
                }
                while (l < r) {
                    maxVol += max - height[l]
                    l++;
                }
                prefix[r] = maxVol
            }
        }

        let r = size - 1;
        for (let l = r - 1; l >= 0; l--) {
            if (height[l] >= height[r]) {
                const pos = r;
                const max = Math.min(height[l], height[r])
                let maxVol = 0
                if (max <= 0) {
                    r = l;
                    continue;
                }
                while (l < r) {
                    maxVol += max - height[r]
                    r--;
                }

                suffix[pos] = maxVol
            }
        }
        
        let res = 0;
        for (let i=0; i<size; i++) {
            res += Math.max(prefix[i], suffix[i]);
        }
        return res;
    }
}
