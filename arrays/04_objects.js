// // const aman = new Object ()

// // console.log(aman);

// // const tinderuser = {}

// // tinderuser.id="123abc"
// // tinderuser.name = "sam"
// // tinderuser.isloggedin=false

// // console.log(tinderuser);

// // //  object under objects

// // const regularuser = {
// //     email:"aman@gmail.com",
// //     fullname: {
// //         firstname:"aman",
// //         lastname:"rathod",

// //         last: {
// //             age:21
// //         }
    
// //     }
// // }

// // console.log(regularuser.fullname.firstname);

// // console.log(regularuser.fullname.last.age );

// const am ={
//     1:"ask",
//     2:"garv",
//     3:"shan"
// }

// const sa = {
//     4:"coco",
//     5:"bal",
//     6:"lol"
// }

// const obj1 = Object.assign({},am,sa)

// console.log(obj1);

// const obj3 = {...am,...sa}

// console.log(obj3);

// console.log(Object.values(am));

const course = {
    coursename : "js in hindi",
    price : 999,
    course_teacher : "hitesh"
};

const {course_teacher : teacher} = course

console.log(teacher);

const navbar = () => {
}

navbar(company = "hitesh")

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {},
    {}
]