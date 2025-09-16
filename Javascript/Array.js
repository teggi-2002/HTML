let name="shoba";
let age=28;
let married=true;

let dataofshobha=["shobha",28,true];
console.log(dataofshobha);

let dataofshobha1=["shobha",28,true,function(){},[],{},null,undefined];
console.log(dataofshobha1);

console.log(dataofshobha.length);

//check
console.log(typeof dataofshobha)//object
console.log(Array.isArray(dataofshobha));//true

let cart=["egg","chicken","paneer","momos","lollypop","buiscuit","idli"];

console.log(cart);

console.log(cart.push('mutton',"shoes"));//add at last
console.log(cart);

console.log(cart.unshift("apple","banana"));//add at first
console.log(cart);
// console.log(cart.length());

console.log(cart.pop());//remove last
console.log(cart);

console.log(cart.shift());//remove first
console.log(cart);

console.log(cart.splice(2,3));//remove from middle
console.log(cart);

console.log(cart.splice(2,1,"fish","meat"));//remove from middle and add
console.log(cart);

console.log(cart.indexOf("momos"));//2
console.log(cart.indexOf("banana"));//-1

console.log(cart.includes("momos"));//true
console.log(cart.includes("banana"));//false
console.log(cart.includes("Momos"));//false

// console.log(cart.reverse());
// console.log(cart);
// console.log(cart.sort());
// console.log(cart);


//map,filter,reduce
//map will add some meaningfull element to existing array
let market=[100,150,1000,25000];
let mapMarket=market.map((items)=>{
    return items+items*0.18;
});
console.log(mapMarket);

let double=market.map((items)=>{
    return items*2
});
console.log(double);

//filter will filter the existing array based on condition
let filterMarket=market.filter((items)=>{
    return items>200
});
console.log(filterMarket);

//reduce will reduce the array to single value  
let reduceMarket=market.reduce((total,items)=>{
    return total+items
});
console.log(reduceMarket);// 26350

let marks=[10,20,30,40,50];
let reduceMarks=marks.reduce((total,items)=>{
    return total+items/marks.length
});
console.log(reduceMarks);//30

let cart100=[]
cart.push=({name:"apple",active:true});
cart.push=({name:"banana",active:false});

console.log(cart100);
let activeUse=cart100.filter((n)=>n.active);
console.log(activeUse);

let arrayVariable = [10,20,120,200,30];[20,10,30,200,120]
let some = arrayVariable.some((x) => {
    return x>30;
})
console.log(some);

let every = arrayVaraiable.every((x)=> {
    return x>9;
})
console.log(every);

let fruits = ['banana','grapes','apple','orange']
console.log(arrayVariable.sort());

let ascendingorder = arrayVariable.sort((a,b) =>{
    return b-a;
})
console.log(ascendingorder);

console.log(fruits.sort());

let nestedArray = [100,200[500,[800],700],300];
let neast = nestedArray.flat(2);

console.log(nestedArray.includes(120));

console.log(nestedArray.indexOf(100));
console.log(neast.reverse());
console.log(neast.join('+'));

//array destructuring
let b=["sushma",60,true];

let [name1,age1,married1] = b;
console.log(name1);
console.log(`in the age of ${age1} ${name1} got ${married});


