const user = {
    username : "hitesh",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//here this is current context in line 6


user.welcomemessage() // method

// if we want to change the value

user.username = "aman"
user.welcomemessage()

//////////////////// arrow function /////////////////

//  function chai (){
//     let username = "hitesh"
//     console.log(this.username);
//  }

//  chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()


/////// pure arrow function ///// core discuss

const addtwo = (num1,num2) => {

    return num1 + num2

}

console.log(addtwo(2,3))


const two = (num1,num2) => num1 + num2  // function with arrow function

 // dont have to write return 

 console.log(two(3,7));

 // implicit return when we don't use return keyword in function

 // explicit return when we don't use return keyword in function
 

 const ad = (num1 ,num2 ) => ({username : "hitesh"})

// we have to use parantheseis to wrap the object

console.log(ad(""));

const myarr = [2,5,6,7,8,9]



