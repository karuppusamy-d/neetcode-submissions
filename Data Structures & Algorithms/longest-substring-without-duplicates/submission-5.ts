class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const n = s.length;

        const arr = Array.from({ length: 128 }).fill(false);
        const a = "a".charCodeAt(0);

        let longest = 0;
        let left = 0;
        for (let right = 0; right < n; right++) {
            const curr = s.charCodeAt(right) - a;
            
            longest = Math.max(longest, right - left - 1);
            while (arr[curr]) {
                arr[s.charCodeAt(left) - a] = false;
                left++;
            }
            arr[curr] = true;

            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}
