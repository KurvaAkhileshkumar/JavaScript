//promises
    //i will call you later
    //i will meet you
//all the promises will be in pending states until they can happen

//a promise depends on future activities
//pending
    //fullfilled
    //rejected
/*
    syntax:
    let promiseObj=new Promise((fulfilled,rejected)=>{

        //fulfilled and rejected are functions
        if(contion==true)
        {
            fulfilled(message)
        }
        else
        {
            reject(message)
        }
    })
*/


//how to consume a promise
/*
    prom-obj.then().catch()
*/ 
let condition
let promObj=new Promise((fullfilled,rejected)=>{

    setTimeout(()=>{
        if(condition==true)
        {
        fullfilled('Promise is resolved')
        }
        else
        {
           rejected("Promise is broken")
        }
    },5000)
})
condition=true
promObj
.then((message)=>{
    console.log('This is then method waiting untill the complete execution of promise')
    console.log(message)
})
.catch((err)=>{
    console.log(err)
})
