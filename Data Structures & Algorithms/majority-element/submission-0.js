class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj={}

        for(let i=0;i<nums.length;i++){
            if(obj[nums[i]] == undefined){
                obj[nums[i]] = 1
            }
            else{
                obj[nums[i]]++
            }
        }
        for(let key in obj){
            
            if(obj[key] >= nums.length/2){
                return key
            }
        }

    }
}
