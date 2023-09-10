//new syntax for constructor function(ES6)

//classes:to create the shapes for an object

class Person{
    //special method it will be automatically executed whenever the new object is created
    constructor(id,name,age,skills,address,basic){
    //object intialisation logic
        this.id=id
        this.name=name
        this.age=age
        this.skills=skills
        this.address=address
        this.basic=basic
    }
    //methods
    getSalary(){
        let hra=this.basic*0.15
        let da=this.basic*0.10
        let ts=this.basic+hra+da
        return ts
    }
}

let person1=new Person(4,'aa',10,['html','css'],{street:'kphb',city:'hyderabad',pincode:500090},20000)
let person2=new Person(5,'bb',11,['js','react'],{street:'jntuh',city:'hyderabad',pincode:501161},30000)

console.log(person1)
console.log(person1.getSalary())

/*  ------Simple Conepts of ES6 feautures------*/
//types of parameters
//default value parameters assigning the value win funtions itself

let test=(a=1)=>{
    console.log(`a is ${a}`)
}
test(10)

//Rest Parameter
    //...a it will pack the values into an array
let test1=(z,...a)=>{ // rest parameter should be passed as last formal parameter
    console.log('a is ',a)
}
//call 
//0 args to n args
test1(100,200,300)

//Spread Syntax

    //to merge arrays/objects
    //to create copy of array/objects

console.log('Spread Syntax Demo')
let arr1=[10,20,30]
let arr2=[100,200,300]

let mergedArray=[...arr1,...arr2,{...person1,...person2}]
let mergedObjects={...person1,...person2} // person2 is overriding the person1 as they have the same keys
console.log(mergedArray)
console.log(mergedObjects)

//copying arrays and objects using spread syntax

let coarr1=[...arr1]
console.log(coarr1)
let cop1={...person1}
console.log(cop1)

//we cannot copy arrays or objects by using assignment operator

let coarr2=arr2
arr2.push(400)
console.log(coarr2) //you can observe that 400 will also be pushed into coarr2 which we assumed to be copy of arr2 similarly with objects


//Destructuring: unpacking of array/objects

let [a,b,c]=arr1
console.log(a,b,c)
let [,,w]=arr1
console.log(w)
let [p,,r]=arr1
console.log(p,r)

let obj={
    x:10,y:20,z:30
}
//Note: the destructuring variables and keys of an objects should match else the values will not be assigned to destructured variables
let {x,y,z}=obj
console.log(x,y,z)