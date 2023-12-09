//Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date("2023-02-05");
// console.log(myCreateDate.toString());

// ***********************TImeStamp*************************

let myTimeStamp = Date.now() // gives current time in miliseconds
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000)); //Converts current time from miliseconds to seconds 


//Extract specific value from date
let date = new Date()
console.log(date);
console.log(date.getMonth()+1);
console.log(date.getDay());


//helps you to customise different aspects of the date according to the requirement
console.log(date.toLocaleString('default',{
    weekday:"long",
}))



