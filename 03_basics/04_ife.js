// immediately innvoked function expression (IFFE)

(function chai () {
    console.log(`DB CONNECTED`);
})(); // execution call and function is wrapped

// to get rid of pollution of global scope we use iffe

( (name) => {

    console.log(`DB connected ${name}`);

})('aman')

(sam)

//error often occurs due to semiclon

