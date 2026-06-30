const score=400
console.log(score);
const balance =new Number(100)
console.log(balance);
console.log(balance.toString().length);//here er converted it into string datatype is string
console.log(balance.toFixed(2));
const othername=123.876
console.log(othername.toPrecision(5));

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));//used for count zeros

//maths

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(4.8));
console.log(Math.ceil(6.8));
console.log(Math.floor(4.8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);

