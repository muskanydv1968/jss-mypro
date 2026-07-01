let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(typeof mydate);

// let createdate = new Date(2023 , 0 ,23);
// let newone = new Date("2023-01-23");
let newonee = new Date("01-14-2034");
console.log(newonee.toLocaleString());
console.log(newonee.toDateString());

let mytime = Date.now();
console.log(mytime);
console.log(newonee.getTime());

let newtime = new Date();
console.log(newtime);
console.log(newtime.getMonth()+1);
console.log(newtime.getDay());

newtime.toLocaleString('default',{
    weekday:'long',
})
    
