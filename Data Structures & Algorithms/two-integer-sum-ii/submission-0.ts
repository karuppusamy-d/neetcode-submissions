class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let index1 = 0;
        let index2 = numbers.length - 1;

        let sum = numbers[index1] + numbers[index2];
        while (sum !== target) {
            if (sum < target) {
                index1++;
            } else {
                index2--;
            }
            sum = numbers[index1] + numbers[index2]
        }

        return [index1 + 1, index2 + 1];
    }
}
