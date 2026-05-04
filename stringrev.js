let num=12345
let reverse=0
for(;num>0;num=Math.floor(num/10)) {
    let rem=num%10;
    reverse=reverse*10+rem;
}
console.log(reverse)