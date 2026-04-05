class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr =[]
        for(let i=0;i<nums.length;i++){
            arr.push(nums[i])
        }
        for(let i=0;i<nums.length;i++){
            arr.push(nums[i])
        }
        console.log(arr)
        return arr
    }
}
