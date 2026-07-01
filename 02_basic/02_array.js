const marvels = ["ironman","spiderman","thor","hulk"];
const ds= ["flsh","batman","new"];
// marvels.push(ds);
// console.log(marvels);

const newhero = marvels.concat(ds);
// console.log(newhero);
const myhero = [...marvels,...ds];
// console.log(myhero);

const real= [1,2,3,[4,7,6],9,[4,7,[9,5]]];
const newone = real.flat(Infinity);
console.log(newone);

console.log(Array.isArray("muskam"));
console.log(Array.from("muskan"));

let score1 =100;
let score2=200;
let score= 400;
console.log(Array.of(score1,score2,score));
