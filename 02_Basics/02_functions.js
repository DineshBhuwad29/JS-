/*
Functions  
*/

function intro(){
    console.log(`My name is Dinesh`);
} 
// intro()

function add(num1,num2){
    let result = num1+num2
    return result
}
const r = add(15,21);
// console.log("Result : ",r)

function userLoginStatus(username){
    return (`${username} just logged in.`)
}

// console.log(userLoginStatus("Dinesh"));

/**********************Passing Objects in Functions**************************/

const userDetail={
    username:"Dinesh",
    itemCost:1999
}

function userDetailDisplay(anyObject) {
    console.log(`${anyObject.username} has to pay ${anyObject.itemCost}`)
}

userDetailDisplay(userDetail)

/**********************Passing Array in Functions**************************/

const itemList = ["apples","oranges","peaches","bananas"]

function displayItems(getArray){
    console.log(`The first item in the list is ${getArray[0]}`)
}

displayItems(itemList)