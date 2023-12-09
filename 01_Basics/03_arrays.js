/* 
-Js arrays are resizeable and can contain a mix of different datatypes.
-Js array-copy-operations create shallow copies 
-Shallow copies are copies whose peoperties have a common reference point.
that means a change in value of shallow property changes the properties in the original copy.
*/

const myarr= [0,1,2,3,4]
const heros = ['shaktiman','batman']

const myArr= new Array(1,21,32,65,41)
// console.log(heros);

//****************Arrays methods********************** */

myarr.push(5)
// myarr.push(6)
// // console.log(myarr)
// myarr.pop()

// myarr.unshift(10) //adds element at the start of the array
// myarr.shift() // removes the first element of the array

// console.log(myarr.includes(11))


let a = myarr.join() // converts all the elements of an array into a comma separated string.
// console.log(myarr)
// console.log(typeof a);

// console.log("A" ,myarr);

// let myn1 = myarr.slice(0,3);
// console.log("B",myn1);
// console.log("A",myarr)
//slice gives the portion of the array excluding the last limit and without changing the original array

// let myn2 = myarr.splice(0,3)
// console.log("C",myn2);
// console.log("A",myarr);

/*
splice gives the portion of the array including the last limit and changes the original array permanently

*/

let marvel_heroes = ["ironman","thor","spiderman"]
let dc_heros = ["batman","flash","superman"]
marvel_heroes.push(dc_heros)
// console.log(marvel_heroes)
marvel_heroes.pop()
// console.log(marvel_heroes)

let b = marvel_heroes.concat(dc_heros)
console.log(b);

let c = [...marvel_heroes,...dc_heros,...myArr]
console.log(c);








