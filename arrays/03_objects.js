// const tinder = {}   

// tinder.id =1
// tinder.name="aman"

// console.log(tinder) ;

const mysum = Symbol("123")

const jsuser = {
    name : "aman",
    roll : 123,
    age :20,
    location :"jaipur",
    isloggedin : false,
    "full name" : "aman rathod",
    [mysum] : "123"
}


// console.log(jsuser.age);
// console.log(jsuser.name);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysum]);

jsuser.age=98

console.log(jsuser.age);

console.log(jsuser);

// adding function in object 

jsuser.greeting = function (){
    console.log("Hey How Are You");
}

console.log(jsuser.greeting());


jsuser.greetingtwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(jsuser.greetingtwo());

//  to refer to the particular object we use this keyword

// most of the object are acessed using . operator or square notation