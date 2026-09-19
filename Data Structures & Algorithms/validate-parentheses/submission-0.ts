class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        for (const char of s) {
            switch(char) {
                case "(":
                case "[":
                case "{":
                    stack.push(char)
                    break;
                case ")":
                    if (stack.pop() !== "(") return false;
                    break;
                case "]":
                    if (stack.pop() !== "[") return false;
                    break;
                case "}":
                    if (stack.pop() !== "{") return false;
                    break;
                default:
                    return false;
            }
        }

        return stack.length === 0;
    }
}
