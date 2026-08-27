class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        let arr = new Array(26)
        const a = 97;

        for (let char of s) {
            const pos = char.charCodeAt(0) - a;
            if (arr[pos]) {
                arr[pos]++;
            } else {
                arr[pos] = 1;
            }
        }

        for (let char of t) {
            const pos = char.charCodeAt(0) - a;
            if (arr[pos] !== undefined && arr[pos] > 0) {
                arr[pos]--;
            } else {
                return false
            }
        }

        return true;
    }
}
