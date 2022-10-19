//prime problem
let num=13;
let factor=0;
for(let i=0;i<=num;i++){
    if(num%i==0){
        factor++
    }
}if(factor==2){
    console.log(num,"is prime")
}else{
    console.log(num,"is not prime")
}

// palindrome number

let num =1221;
let rev=0;
let rem;

while(num!=0){
rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10);
}

console.log(rev)