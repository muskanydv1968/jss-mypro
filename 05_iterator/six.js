const mynum =[1,2,4,5,7,8,9]
// const newnum = mynum.filter((num)=>num>4)
// console.log(newnum)

// const newnum = mynum.filter((num)=>{
//      return num>4
// })
// console.log(newnum)
const newnum = []
mynum.forEach((num)=>{
    if (num>4) {
        newnum.push(num)
    }
})
console.log(newnum)

//maps
const mynums=[1,2,3,4,5,6,7]
// const newone=mynums.map((num)=>num+10)
// console.log(newone);
//chaining

const newone =mynums
                 .map((num)=>num*10)
                 .map((num)=>num+1)
                 .filter((num)=>num>=40)
                 console.log(newone);
