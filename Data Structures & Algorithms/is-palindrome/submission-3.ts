class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;
        
        while (start < end) {
            while (!this.isLetter(s[start])) {
                start++;
                if (start === end) return true;
            }
            while (!this.isLetter(s[end])) {
                end--;
                if (start === end) return true;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
        
        return true;
    }

    regex = /[a-zA-Z0-9]/
    isLetter(char: string): boolean {
        return this.regex.test(char)
    }
}
