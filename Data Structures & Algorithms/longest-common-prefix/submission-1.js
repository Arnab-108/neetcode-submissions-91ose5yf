class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let arr = strs.sort()

        console.log(arr,"arr")
        let bag = ''

        for(let i=0;i<arr[0].length;i++){
            
            if(arr[0].charAt(i)===arr[arr.length-1].charAt(i)){
                bag += arr[0].charAt(i)
            }
            else{
                return bag
            }
        }
        console.log(bag)
       return bag


    }
}
