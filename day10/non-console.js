let num=Number(prompt("enter a number"));
if(num>0){
    if(num%2===0){
        alert("the number is positive and even");
    }else{
        alert("the number is positive and odd");
    }
}
else if(num<0){
    if(num%2===0){
        alert("the number is negative and even");
    }else{
        alert("the number is negative and odd");
    }
    }
else{
    alert("the number is zero and even");
}
