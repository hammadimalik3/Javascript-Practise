//const tinderUser = new Object()

const tinderUser={}

tinderUser.id='123'
tinderUser.name="rohan"
tinderUser.email="rohan@gmail.com"

// console.log(tinderUser);

const regularUser = { 
    email: "r@gmmail.com",
    fullname: {
        username: {
            firstname: "rohan",
            lastname: "hammad"

        }
    }
}

// console.log(regularUser.fullname.username.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {1: "c", 2: "d"}
// const obj3 = {1: "e", 2: "f"}

// // const obj4 = {obj1, obj2,obj3}
// // const obj4 = Object.assign (obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//  console.log(tinderUser);

//   console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

