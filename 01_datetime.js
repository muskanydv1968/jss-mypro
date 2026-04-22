let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let mynewdate=new Date(2023,0,23)
let mynewdate=new Date("01-14-2023")
console.log(mynewdate.toLocaleString());

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mynewdate.getTime());

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.group(newdate.getDay());

newdate.toLocaleString('default',{weekday:"long",
    
})