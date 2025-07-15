let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
     case 2:
            console.log("tuesday");
            break;
       default:
                console.log("other day");
}



/example/
let username=prompt("enter the name:");
let age=prompt(username+",please enter your age:");
age=Number(age);
switch(true){
    case age<0 || Number.isNaN(age):
        console.log("invalid age");
        break;
        case age<=18:
            console.log(" not eligible to vote");

            case age>=18 && age<=60:
                console.log("eligible to vote");
                break;
            case age>60:
                console.log("senior citizen");
                break;
             default:
                console.log("no special category");
                break;
}


