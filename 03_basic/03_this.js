const user ={
    username: "muskan",
    price :99,
    welcomemessage :function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomemessage()
// user.username ="sam"
// user.welcomemessage()
// console.log(this);
// const chai = function(){
//     let username ="muskan"
//     console.log(this.username);
// }
// chai()
const chainn = (num1,num2) => {
    return num1+num2
}
console.log(chainn(3,4));

const chai = (num1,num2) => ({username : "muskan"});

console.log(chai(3,4))
