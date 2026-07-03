function saymyname(){
    console.log("m");
    console.log("u");
    console.log("s");
    console.log("k");
    console.log("a");
    console.log("n");
}
saymyname()
function addTwonumbers(number1,number2){
    // let result = number1+number2;
    // console.log("muskan");
    return  number1+number2;
    // return result;
}
const result = addTwonumbers(2,3);
console.log(result);

function loginuser(username){
    if(!username){
        console.log("please provide a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginuser());

function calculateprice( val1,val2 ,...num1){
    return num1
}
// console.log(calculateprice(100));
console.log(calculateprice(100,200,300,400));
const user={
    sername:"muskan",
    price:199
}
function anyuser(anyobject){
    console.log(`username is ${anyobject.sername} and price is ${anyobject.price}`);
}
anyuser(user);
anyuser({
    username:"sam",
    price:399
})
const newarray = [200,300,400,900]
function returnsecond(getarray){
    return getarray[1]

}
console.log(returnsecond(newarray));
console.log(returnsecond([200,300,400,900]));