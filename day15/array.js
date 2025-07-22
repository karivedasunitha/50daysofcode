//array destructuring
const fruits=["apple","banana","cherry"];
const[a,b,c]=fruits;
console.log(a);
console.log(b);

//map
let numbers=[1,2,3,4];
let Add=numbers.map(num=>num+2);
console.log(Add);
console.log(numbers);


//filter
const number=[1,2,3,4]
const evenNumbers=numbers.filter(num=>num%2==0);
console.log(evenNumbers)


//reduce
const numb=[1,2,3,4];
const sum=numb.reduce((acc,num)=>acc+num,0)
console.log(sum);

//task
const arrayOfArray=[[1,2],[3,4],[5,6]];
       const union=arrayOfArray.reduce((acc,num)=>{
        return acc.concat(num);
       },[]);//initial value of accumulator is an empty array
       console.log("Original array of arrays:",arrayOfArray);//original array
        console.log("After union of arrays:",union);//output:[1,2,3,4,5,6]


//task2
let cars=[
       {model:"bmw",year:2024}
       {model:"kia",year:2025}
];
console.log(cars[1].model);

//task2
let car=["car=bmw","model=new","year=2023"];
console.log("car")
