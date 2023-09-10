let arr=[10,20,30]
arr.push(40)

//for of loop for traversal
console.log(`Using for of loop`)
for(let a of arr)
console.log(a)

//array operations

//insertion
    //At beginning of the array unshift used returns the length of the new array
arr.unshift(1,2,3,4)

    //At the end of array push used returns the length of the array
arr.push(100,200,300)

//How to add elements in between beginning and ending we use splice--used for index based insertion deletion updation

//index based insertion 
//syntax splice(index,remove/replace,value)
// arr.splice(2,0,123)
//multiple elements can be inserted by providing the series of values
arr.splice(2,0,123,456)

console.log(`Elements of array before deletion operations`)
console.log(arr)

//deletion 

//removing elements from beginning shift method is used with you can remove one element at a time returns the removed element
arr.shift()

//removing elements from end pop method is used with you can remove one element at a time returns the removed element
arr.pop()

//index based deletion splice method is used syntax splice(index,remove number of elements)
let removedelements=arr.splice(0,1)
console.log('Splice Returning the array of removed elements')
console.log(removedelements)
console.log(`Elememts of array after using splice for deletion`)
console.log(arr)


//update splice can be used syntax splice(index,1,value)



//Advanced operations on array