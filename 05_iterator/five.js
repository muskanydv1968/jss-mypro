const coding =["js","notnow","cpp"];
coding.forEach(function(val){
    console.log(val);
})
// function printme(item){
//     console.log(iteam);
// }
// console.forEach(printme);
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const mycoding =[
{
    languagename :"javascrpy",
    language:"cpp"
},
{
    languagename :"javascrpy",
    language:"cpp"
},
{
    languagename :"javascrpy",
    language:"cpp"
},

]
mycoding.forEach((item)=>{
    console.log(item.languagename);
})