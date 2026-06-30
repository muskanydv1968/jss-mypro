const marvelhero=["flash","iron","superman"]
const avenger=["blackman","heros","thor"]
//marvelhero.push(avenger)
//console.log(marvelhero);

const allheros=marvelhero.concat(avenger)
console.log(allheros);

//const allnew=[...marvelhero,...avenger,...allheros]
//console.log(allnew);

const another_array=[1,2,4,[2,5,6],9,[8,5,4]]
const realhero=another_array.flat(Infinity)
console.log(realhero);

console.log(Array.isArray("muskan"))
console.log(Array.from("muskan"))
console.log(Array.from({name:"muskan"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));