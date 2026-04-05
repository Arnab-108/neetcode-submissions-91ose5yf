class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let arr = nums.map((n,index) => [n,index])
        arr = arr.sort((a,b)=> a[0] - b[0])
        console.log(arr)

        let l=0
        let r = arr.length-1

        while(l<r){
            let sum = arr[l][0] + arr[r][0]
            console.log(sum,'sum')
            if(sum == target){
                return [arr[l][1],arr[r][1]]
            }
            else if(sum > target){
                r--
            }
            else{
                l++
            }
        }

    }
}
