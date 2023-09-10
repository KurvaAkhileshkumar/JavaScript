//ES6 methods of an array(Higher order functions)

//CallBack function:A function which can be passed as an argument to another function

//Higher Oder function:A function either recieves a function as an argument or returns a function

const test2=(a)=>{
    console.log(`test2`)
}

const test3=()=>{
    console.log(`test3`)
}
const test=(a,b)=>{        
    console.log('test')
    a()
    return b;
}
const x=test(test2,test3)
x()


//ES6 Methods of an array
/*
    filter(callbackfunction):filtering the data
    map(callbackfunction):modifying the data
    forEach(callbackfunction):to iterate an array
    reduce(callbackfunction)
    findIndex(callbackfunction)
*/

let arr = [10, 20, 30, 40, 50]

//An array method takes the element one by one from the array and passes it to the callback function 
//how many times the callback function will be executed it is proportional to the length of the array
//who is calling the callback function: the method is calling the callback function proportional to the length of the array passing the every element once


//filter method is used to filtering from the unwanted data
let elementsGreaterThan20 = arr.filter(ele => {

    return ele > 20;
})

//modification cannot be used to modify the data
let modifyData = arr.filter(ele => {

    return ele + 10;
})

console.log(elementsGreaterThan20)
console.log(modifyData)

//map method can be used to modify the data
let modifyDataUsingMap = arr.map(ele => {
    return ele + 10;
})
console.log(modifyDataUsingMap)

//map method cannot be used to filter the data it return boolean values
let filteringDatausingMap = arr.map((ele) => {
    return ele > 20;
})
console.log(filteringDatausingMap)

//forEach method to Iterate an Array
arr.forEach((ele, index) => {
    console.log(`${index}->${ele}`)
})


//reduce method is used to reduce the element to a single value
//takes the two arguments accumulater and element the result is stored in accumulator
let sumOfElements = arr.reduce((accumulator, ele) => {
    accumulator = accumulator + ele
    return accumulator
})
console.log(`Sum of all Elements in array ${sumOfElements}`)

let maxElement = arr.reduce((acc, ele) => acc >= ele ? acc : ele)
console.log(`Max Element ${maxElement}`)
let minElement = arr.reduce((acc, ele) => acc >= ele ? ele : acc)
console.log(`Min Element ${minElement}`)


//find method is used to find the element searching for the element
//if element is present in the array it returns the element else returns undefined
let res=arr.find((ele)=>ele==50)
if(res==undefined)
console.log(`Element not found`)
else
console.log(`Element found`)


//findindex if found returns the index else returns -1
let ch=arr.findIndex((ele)=>ele==20)
if(ch==-1)
console.log(`Element not found`)
else
console.log(`Element is present at ${ch}`)