let hello=function()
{
    return"hello world!";
}
console.log(hello());


/even-odd/
let s1=Number(prompt("enter the number"));
let a=()=>{
    return s1%2==0?
    "even":"odd";
}
console.log(a());


/factorial/
let n2=Number(prompt("enter the number"));
let c=(n2)=>{
    let result=1;
    for(let i=2;i<=n2;i++)
    {
        result*=i;
    }
    return result;
}
console.log(c(n2));


/fizz-buzz/
let  l=prompt("enter the number");
let m=(l)=>{
    if(l%3==0&&l%5==0){
        return "fizzbuzz";
    }
    else if(l%3==0){
        return "fizz";
    }
    else if(l%5==0){
        return "Buzz";
    }
    else{
        return l;
    }
}
console.log(m(l));






