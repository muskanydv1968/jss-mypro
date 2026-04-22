const myarr=[0,1,4,5,6] //declaration

const myarr2=new Array(1,2,3,4)//declaration
console.log(myarr[1]);

//array method

myarr.push(9)
myarr.pop()
console.log(myarr);
//myarr.unshift(0); //value ko starting me shift kar deta hai

console.log(myarr.includes(8)); //value present hai array me
console.log(myarr.indexOf(-1));

const newarr=myarr.join()
console.log(myarr);
console.log(typeof newarr);

//slice or splice

console.log("A",myarr);

const myn1=myarr.slice(1,3) //here 3 is not included in this
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log("c",myarr);
console.log(myn2);
