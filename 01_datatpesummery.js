//primitive 
//7 type= string,number,boolean,null,undefined,symbol(value ko unique bnane ke liye)
//BigInt(use for large value)
const score=100
const scorevalue=100.3
const isloggedIn=false
const outsidetemp=null
let useremail;

const id= Symbol('123') //both value are different 
const anotherid = Symbol('123')

console.log(id === anotherid);
const bigNumber= 577274266428476478n


//reference (non primitive)
// array,object,function

const heros=["batman","spiderman","superman"] ;//array
 let myobj={
    name:"myname",
    age:22, //object define
}
const myfunction=function(){
    console.log("hellow world");
} //function declaration
console.log(typeof myfunction);

//memory
//stack(primitiv),heap(non primitive)