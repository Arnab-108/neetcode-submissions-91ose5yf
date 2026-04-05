class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let finalMax = -1

        for(let i=arr.length-1;i>=0;i--){
            let max = Math.max(arr[i],finalMax)
            arr[i] = finalMax
            finalMax = max
            
        }

        console.log(arr)
        return arr
    }
}
