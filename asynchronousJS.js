//synchronous(blocking): one after other
//asynchronous(non-blocking): many at once

//restaurent example
    //waiter working as synchronous
    //table 1 biryani(10mins)
    //table 2 curd rice(5mins)
    //table 3 water bottle (waiter responds to wait for 5mins and then delievers the bottle to table 3)
//he has to wait until the chef prepares the food and serves the food to table 1 then the waiter moves to table 2

    //waiter working asynchronously
    //table 1
    //table 2
    //table 3
//he need not wait until the chef prepares the food, he goes to other tables to take the order. This is Asynchronous behaviour.

//asynchronous is efficient as there is no waste of time


/*
    task-1--20sec
    task-2--7sec
    task-3--10sec
    task-4--8sec

    performing tasks in a synchronous way total time to complete all tasks--45sec
    performing tasks in an asynchronous way total time to complete all tasks-20sec

*/

//blocking code example

console.log('statement 1')
//blocking request
// for(let i=0;i<10000000000;i++);
// {

// }

setTimeout(()=>{
    console.log('statement 2')
},5000)
console.log('statement 3')


//javascript has given timer functions for asynchronous behaviour
/*setTimeout(()=>{

},timeInMilliSeconds)*/

//Restaurent example

console.log('cust-1 ordered biryani')
setTimeout(()=>{
    console.log('biryani delivered to cust-1')
},10000)
console.log('cust-2 ordered curd rice')
setTimeout(()=>{
    console.log('curd rice delivered to cust-2')
},5000)
console.log('cust-3 ordered water bottle')
setTimeout(()=>{
    console.log('water bottle delivered to cust-3')
},2000)

