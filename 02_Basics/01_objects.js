/*
When the oject is declared as literal it is not a singleton object.
WHEN the object is declared through constructor it is a singleton object.  
*/

const mysym = Symbol("DB")

const JsUser = {
    name:"Dinesh",
    age:22,
    location:"Thane",
    email:"dinesh@google.com",
    isActive:true,
    [mysym]:"Dinesh Bhuwad"
}

console.log(JsUser["name"]);
console.log(JsUser[mysym]);

JsUser.email = "dinesh@facebook.com"
Object.freeze(JsUser) // Doesnt allow any change to the object.
console.log(JsUser)