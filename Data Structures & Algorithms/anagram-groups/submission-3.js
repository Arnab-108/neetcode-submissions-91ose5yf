class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr = strs.map((str)=>{
            return str.split('').sort().join('')
        })

        let obj={}

        for(let i=0;i<arr.length;i++){
            if(arr[i] == strs[i].split('').sort().join('')){
                if (obj[arr[i]]) {
                    obj[arr[i]].push(strs[i])
                    
                } else {
                    obj[arr[i]] = [strs[i]]
                }
            }
        }

        arr=[]

        for(let key in obj){
            arr.push(obj[key])
        }

        return arr
    }
}
