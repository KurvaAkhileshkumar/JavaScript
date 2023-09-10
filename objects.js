//objects are real world entities.
//object is an unordered collection of data.
//creating an object
    //Method 1:object literal:It is used when u r dealing objects of different types.
    /*
        {
            key:value
            key:value
            .
            .
            .
        }
        Accessing Properties
        obj.key==>value
        obj['key']==>value

        Adding new properties during run time
        obj.new-key=new-value
    */

const person={
    id:"20071a05n0",
    name:"Akhilesh",
    age:21
}

const car={
    name:'sv100',
    brand:'suzuki',
    model:'tata'
}

console.log(`person object before`)
console.log(person)

person.moibileNo=6309818117 //adding new key

person.name='Ashok' //updating the existing key

delete person.age //deleting the existing key

delete person.abcd //deleting the key which is not existing it gives no error

console.log(person.xyz) //no error returns undefined

console.log(person)

//Iterating an object
//for in loop is used to iterate an object

for(let k in person)
    console.log(`${k}-->${person[k]}`)


//complex objects
console.log(`Complex Objects`)
const person2={
    id:100,
    name:'Ravi',
    age:23,
    basic:20000,
    skills:['c++','html','Css','js','react'],
    address:{
        street:'kphb',
        pincode:500090,
        city:'hyderabad'
    },
    getSalary:function(){
        //calculate hra da and calculate salary
        let hra=this.basic*0.15 //if this opeartor is not used then the function looks for the basic outside of object
        let da=this.basic*0.10
        let sal=this.basic+hra+da                
        return sal
    }
}

console.log(person2.getSalary())



