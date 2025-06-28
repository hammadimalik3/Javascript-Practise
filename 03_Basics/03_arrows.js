// const user = {
//     name: "Rohan",
//     price: 999,

//     welcommeMessage: function(){
//         console.log(`${this.name}, welcome to website`);
//         console.log(this);
        
        
//     }
// }
// user.welcommeMessage()
// user.name = 'Hammad'
// user.welcommeMessage()
// console.log(this);

// function chai(){
//     let name = "Rohan"
//     console.log(this.name);
    
// }

// chai()


// const chai = () => {
//     let name = "Rohan"
//     console.log(this);
// }

//chai()

//Explicit Return (mmust used return keyword)
// const addTwoNumbers = (num1,num2) =>{
//     return num1 + num2
// }

// console.log(addTwoNumbers(6,8))

//Implicit Return (no return keyword)
// const addTwoNumbers = (num1,num2) => num1 + num2

// console.log(addTwoNumbers(5,6));

// const addTwoNumbers = (num1,num2) => (num1 + num2)

// console.log(addTwoNumbers(5,7));

// to return object value in arrow function
const addTwoNumbers = (num1,num2) => ({name:"Rohan"})

console.log(addTwoNumbers(5,7));