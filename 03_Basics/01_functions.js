// function twoNumbers(num1,num2){
  
//  return num1 + num2;

// }
// const result = twoNumbers(44,66)
// console.log(result);

// function loginUser(username = "hammad"){
//     if(!username){
//         console.log("Enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser())

// function cartPrice(val1,val2, ...num1){
//     return num1
// }

// console.log(cartPrice(400,20,370,809))

// const user = {
//     name: "Rohan",
//     price: 200
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
    
// }
// // handleObject(user)

// handleObject({
//     name: "Hammad",
//     price: 400
// })

const anyArray = [400,566,777,900]

function secondValue(getArray){
    return getArray[2]
}

// console.log(secondValue(anyArray))
console.log(secondValue([500,400,600,777]));
