//Method 2:Constructor function:It is used when u r dealing objects of Same types.
const person1={
    id:1,
    name:"Akhilesh",
    age:21
}

const person2={
    id:2,
    name:"Ashok",
    age:22
}

const person3={
    id:3,
    name:"Ashok-2",
    age:23
}

//drawback of object literals for the same type we have to write and repeat the same ids again and again so we are trying to automate using constructor function
function Person(id,name,age,skills,address,basic){
    //object intiaisation logic
    this.id=id
    this.name=name
    this.age=age
    this.skills=skills
    this.address=address
    this.basic=basic
}

let person4=new Person(4,'aa',10,['html','css'],{street:'kphb',city:'hyderabad',pincode:500090},20000)
let person5=new Person(5,'bb',11,['js','react'],{street:'jntuh',city:'hyderabad',pincode:501161},30000)
console.log(person4)
console.log(person5)

//prototype property of an object : it means every object has this property so we seperate it make available to all objects
//it is a space where all objects inherits features from prototype
//object:datatype
//Obeject:constructor function to create object datatype

console.log(`Prototype is ${Person.prototype}`)

//adding method to person prototype

Person.prototype.getSalary=()=>{
    let hra=this.basic*0.15
    let da=this.basic*0.10
    let ts=this.basic+hra+da
    return ts
}

Person.prototype.toString=()=>{
    console.log(`overriding the toString() method`)
}
/*
    Object.prototype(Root level Prototype)
            |
    myobj1.prototype
            |
    myobj2.prototype
*/