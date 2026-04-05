class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj={}
        let obj1={}
        if(s.length !== t.length){
            return false
        }

        for(let i=0;i<s.length;i++){
            if(obj[s[i]]==undefined){
                obj[s[i]]=1
            }
            else{
                obj[s[i]]++
            }
        }

        for(let j=0;j<t.length;j++){
            if(obj1[t[j]]==undefined){
                obj1[t[j]]=1
            }
            else{
                obj1[t[j]]++
            }
        }

        console.log(obj,obj1)
        for(let key in obj,obj1){
            console.log(obj[key],obj1[key])
            if(obj[key] !== obj1[key]){
                return false
            }
        }

        return true
    }
}
