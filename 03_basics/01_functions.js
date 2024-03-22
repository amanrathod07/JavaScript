function saymyname () {
    console.log("a");
    console.log("m");  // function defination
    console.log("a");
    console.log("n");
}

// saymyname()  basic funstion


function add (num1,num2){ // parameters
   console.log (num1+num2); // function defination
}

add(3,4) // function  call
// arguments are called when function is call

 function print (username)
 {
    if(username === undefined)
    {
        console.log("plesase enter a username");
    }
    else
    {
        return `${username} just logged in`
    }
 }

// console.log(print());


function price(val1,val2,val3,...num1) {  // rest operator : jitna item hai khule mai milna aur pack krna
    return num1
}

// console.log(price(2));

console.log(price(200,400,600,800));


// objects

const user = {
    username : "neha",
    price : 999    
}

// function is called using object

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user); // object is passed

handleobject({
    username :"sam",
    price : 100
})

const myarr = [100,200,300,400]

function aman (mynewarr){
    return mynewarr[0]
}

console.log(aman(myarr));