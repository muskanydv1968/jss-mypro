for(let i =0;i<10;i++){
    const element = i;
if(element==5){
    console.log("5is best");
}
    console.log(element);
}

for(let i=0;i<10;i++){
    console.log('outer loop : ${i}');
    for(let j= 0;j<=10;j++){
        console.log(i+"*"+j+"="+ i*j);
    }
}

let myarray =["flash","name","type"]
console.log(myarray.length);
for(let index=0;index<myarray.length;index++){
    const element =myarray[index];
    console.log(element);
}

for(let i=0;i<10;i++){
   if(i==5){
    console.log('detect 5');
    continue;
   }
   console.log(i);
}