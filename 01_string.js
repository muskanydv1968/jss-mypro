const name="muskan"
const repocount=20
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('muskannsc_hc_com')

console .log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLocaleLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2)); //is index pe kon sa char hai
console.log(gamename.indexOf('t')); // ye char kis index pe hai
 
const newString =gamename.substring(0,4)
console.log(newString);
const anotherstring =gamename.slice(-8,4) //slice me hum neg ka use kr sakte hai
console.log(anotherstring);
const newstringone=" muskan "
console.log(newstringone);
console.log(newstringone.trim());//we use tirme to remove spaces

const url="https://muksan.com/muksan%20yadav"

console.log(url.replace('%20','_'))
console.log(url.includes('muksan'))

console.log(gamename.split('_'));