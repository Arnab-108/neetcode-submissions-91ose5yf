class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // let arr = strs.map((str)=>{
        //     return str.split('').sort().join('')
        // })

        // console.log(arr)

        // let obj={}

        // for(let i=0;i<arr.length;i++){
        //     if(arr[i] == strs[i].split('').sort().join('')){
        //         if (obj[arr[i]]) {
        //             obj[arr[i]].push(strs[i])
                    
        //         } else {
        //             obj[arr[i]] = [strs[i]]
        //         }
        //     }
        // }

        // arr=[]

        // for(let key in obj){
        //     arr.push(obj[key])
        // }

        // return arr

        const res = {};

        for(let s of strs) {
            let count = new Array(26).fill(0);

            for(let char of s) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let key = count.join(",");
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);
    }
}
