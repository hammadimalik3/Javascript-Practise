// const name = "Rohan"
// const repoCount = 50

// // console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String ("Hammmad-r")
// console.log(gameName[1]);
// console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    Rohaan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohan.com/rohan%20hammad";
console.log(url.replace('%20', '-'));

console.log(url.includes('rohan'));

console.log(gameName.split('-'));
