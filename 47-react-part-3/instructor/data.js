// ASSIGNED BY VALUE
// Boolean
// String
// Number
// null
// undefined

let haveIEver = true
let hello = "world"
let i = 5
let nothing = null

const unchangableHello = "world"
let j = i


// ASSIGNED BY REFERENCE
// Array
// Function
// Object

let arr1 = [1,2,3]
let arr2 = arr1

const arr3 = [5,6,7]
arr3 = [10,11,12] // Won't work
const arr4 = arr3

// Use ... to dulicate

const arr5 = [...arr3]
