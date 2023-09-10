//API: Application program Interface
//JSON:javascript object notation (platform neutral dataformat(xml/json))

/*
{
    "id":100,
    "name":"ravi",
    "city":"Hyderabad"
}
*/

/*
    making an api call syntax:
        fetch(url)  //retunrs the promise obj
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
        .catch()
 */


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response=>{
    return response.json()
})
.then(data=>{
    data.forEach(ele=>{
        for(let v in ele)
        console.log(v,':',ele[v])
    })    
})
.catch(err=>{
    console.log(err)
})