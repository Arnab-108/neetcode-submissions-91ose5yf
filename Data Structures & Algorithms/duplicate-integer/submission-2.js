class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj={}

        for(let i=0;i<=nums.length-1;i++){
            if(obj[nums[i]] == undefined){
                obj[nums[i]] =1 
            }
            else{
                obj[nums[i]]++
            }
        }

        console.log(obj)
        for(let key in obj){
            if(obj[key]>1){
                return true
            }
        }

        return false
    }
}
