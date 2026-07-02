const tinderuser = new Object();
console.log(tinderuser);
tinderuser.id="1938";
tinderuser.name ="muskan";
tinderuser.isLoggedIn=false;
console.log(tinderuser);
const regularuser ={
    email:"muksan@gmail.com",
    fullname:{
        userfullname:{
            firstname:"muskan",
            lastname:"yadav"

        }
    }
}
console.log(regularuser.fullname.userfullname);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
const obj4={...obj1,...obj2};
const user=[
    {
        id:1,
        email:"muskan@ggmail.com"
    },
    {
        id:1,
        email:"muskan@ggmail.com"
    },
    {
        id:1,
        email:"muskan@ggmail.com"
    }
]
user[1].email;
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));