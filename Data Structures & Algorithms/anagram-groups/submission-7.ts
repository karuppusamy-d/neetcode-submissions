class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let str of strs) {
            const arr = new Uint16Array(26).fill(0);

            for (const char of str) {
                arr[char.charCodeAt(0) - 97]++
            }

            const key = arr.join("$")
            if (map.has(key)) {
                map.get(key).push(str)
            } else {
                map.set(key, [str])
            }
        }

       
        return [...map.values()];
    }

    
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagramsV2(strs: string[]): string[][] {        
        const result = new Array<string[]>([strs[0]])
        let ptr = 1;
        while (ptr < strs.length) {
            let added = false
            for (const group of result) {
                if (this.isAnagram(group[0], strs[ptr])) {
                    group.push(strs[ptr])
                    added = true;
                    break;
                }
            }
            if (!added) {
                result.push([strs[ptr]])
            }
            ptr++;
        }

        return result
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagramsV1(strs: string[]): string[][] {
        const map = new Map<number, string[]>();

        for (let str of strs) {
            if (map.has(str.length)) {
                map.get(str.length).push(str);
            } else {
                map.set(str.length, [str])
            }
        }

        let result: string[][] = []

        for (let values of map.values()) {
            const groups = new Array<string[]>([values[0]])
            let ptr = 1;
            while (ptr < values.length) {
                let added = false
                for (const group of groups) {
                    if (this.isAnagram(group[0], values[ptr])) {
                        group.push(values[ptr])
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    groups.push([values[ptr]])
                }
                ptr++
            }
            result = [...result, ...groups]
        }

        return result
    }

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
