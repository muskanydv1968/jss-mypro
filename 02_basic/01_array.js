const myarr =[0,1,2,4,5,6];
const myhero=["spiderman","ironman","thor"];
const myarr2= new Array(1,2,6,7);
console.log(myarr[1]);

// myarr.push(8);
// myarr.push(7);
// myarr.pop();
// myarr.unshift(2);
myarr.shift();
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newone =myarr.join();
console.log(newone);
console.log(typeof newone);

console.log("A",myarr);
const newn= myarr.slice(0,3);
console.log(newn);
console.log("B",myarr);

const new2=myarr.splice(1,3);
console.log(new2);
console.log(newn);
// console.log("C",myarr);