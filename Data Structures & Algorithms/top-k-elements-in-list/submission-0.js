class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj={}

        for(let i=0;i<nums.length;i++){
            if(obj[nums[i]] == undefined){
                obj[nums[i]] = 1
            }
            else{
                obj[nums[i]]++
            }
        }

        let arr = Object.entries(obj).map(([num,freq]) => [
            freq,
            parseInt(num)
        ])
        arr.sort((a,b) => b[0] - a[0])

        console.log(arr)

        return arr.splice(0,k).map((pair)=> pair[1])
    }
}
