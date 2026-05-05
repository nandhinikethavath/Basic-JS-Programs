const countvowels=function(str) {
    let count=0;
    let vowels="aeiouAEIOU";
    for (let i=0;i<str.length;i++) {
        if(vowels.indexOf(str[i])!==-1)
        {
            count++;
        }
    }
    return count;
}
let txt="hello world";
console.log("Number of vowels:",countvowels(txt));