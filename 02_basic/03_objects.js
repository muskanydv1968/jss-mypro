//objects
const mysym =Symbol("key1");
const userjs={
    "name":"muskan",
    age:19,
   [ mysym]:"mykey",
    location:"jaipur",
    email:"muksan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday","tuesday"],


}
console.log(userjs["email"]);
console.log(userjs["name"]);
console.log(userjs[mysym]);
console.log(typeof userjs[mysym]);
userjs.email="muksna@cgatpt.com";
console.log(userjs.email)
// Object.freeze(userjs);
userjs.email="muskan@12gmail.com";
console.log(userjs);

userjs.greeting = function(){
    console.log("hellow js user");
}
userjs.greetingtwo = function(){
console.log(`hellow js user ${this.name}`);
}
console.log(userjs.greetingtwo());
console.log(userjs.greeting());