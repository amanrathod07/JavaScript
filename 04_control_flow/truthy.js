const useremail = ""

if(useremail)
{
    console.log("got user email");
}
else{
    console.log("dont have email");
}

// truthy and falsy values

// falsy values
// false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN

//truthy values
// "0" , 'false' , " " , [] , {} , function(){}


const emp = {}

if (Object.keys(emp).length===0){
    console.log("object is empty");
}

// && and operator || or operator

// nulish coalescing operator (??) : null undefined working
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 // here we assign complex function
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ternary and null coalescing is diffrent

//condition ? true : false 
let price =10
price <=9 ? console.log("price is less") : console.log("price is grater")