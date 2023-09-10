//Modules examples: ecommerce(Refactoring :splitting the code into multiple files)
//users
//products
//cart
//profile
 // to work with the modules to the script element add type='module'

 //communication among modules we use import and export

 //export: a)default export b)named export

        //default export: export default name
        //named exports: you can use export key with varible declaration itself and you have to use the same name while importing

 //import 

    //import var-name from 'path of the modules'
import users from "./users.js"; //default export
import {products} from "./products.js"; //named export 

console.log(users)
console.log(users.users2)
console.log(products)