class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
       
        const prefix = Array<number>(nums.length).fill(1)
        const suffix = Array<number>(nums.length).fill(1)

        for (let i=1; i<len; i++) {
            prefix[i] = prefix[i-1] * nums[i-1]
            suffix[len-i-1] = suffix[len-i] * nums[len-i]
        }

        const result = Array<number>(nums.length)
        for (let i=0; i<len; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
