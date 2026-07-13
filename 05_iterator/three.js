//for of
const greet =[1,2,3,4];
for (const i of greet) {
    console.log(i);
    
}
//maps
const map =new Map()
map.set('in','indea')
map.set('it','pakistan')
map.set('itt','afganistan')
map.set('into','dubai')
console.log(map);

for(const [key,value]of map){
    console.log(key,'=>',value);
}