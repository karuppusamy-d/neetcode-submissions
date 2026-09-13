class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = ''
        for (let str of strs) {
            encoded+= `${str.length}#${str}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = [];
        for (let i=0; i < str.length;) {
            let numEnd = i+1;
            while (str[numEnd] !== '#') {
                numEnd++;
            }
            const count = Number(str.slice(i, numEnd))
            const endIndex = numEnd + 1 + count;
            decoded.push(str.slice(numEnd+1, endIndex))
            i = endIndex
        }
        return decoded;
    }
}
