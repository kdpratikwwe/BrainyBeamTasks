let age=10;
let Name='Hello';
let logged_in=true;


  
    console.log(typeof age)
    console.log(typeof Name)
    console.log(typeof logged_in) //types of datatypes

    let result=squareofNumber(age);
    console.log("Square of age is: "+result); // square of number function call

    let user={
        name: 'John',
        age: 30,
        city: 'New York',
        Email: 'abc@gmail.com'
    } // object creation

    //object data extraction
    console.log(user.Email);
    console.log(user['city']);
    console.log(user.name);
    console.log(user.age);
 
function squareofNumber(age){
    return age*age;
}