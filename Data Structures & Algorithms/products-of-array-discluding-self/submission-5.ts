class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;       
        const result = Array<number>(len).fill(1)

        let prefix = 1
        let suffix = 1
        for (let i=1; i<len; i++) {
            // calculate prefix
            prefix *= nums[i-1]
            result[i] *= prefix;

            // calculate suffix
            suffix *= nums[len-i]
            result[len-i-1] *= suffix;
        }

        return result;
    }
}
