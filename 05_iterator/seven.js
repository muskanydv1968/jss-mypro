const mynum =[1,2,3]
const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)

const shoppingcart =[
    {
      iteamname : "js cource",
      price : 299
 },

{
      iteamname : "now js cource",
      price : 190
},
{
      iteamname : "jss cource",
      price : 378
},
{
      iteamname : " not js cource",
      price :977
},
]
 const pricetwo= shoppingcart.reduce((acc,item)=>acc+item.price,0)
 console.log(pricetwo);