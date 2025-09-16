let name='pavitre';
let age=18;
let place='dharwad';

let info={
    name:"pavitra",
    age:18,
    place:"dharwad"
}
console.log(info);

console.log(info.name);
console.log(info.age);
console.log(info);
console.log(info.husband="manjunath");
console.log(info);
console.log(info.wife);
console.log(info.age=19);
console.log(info);
console.log(delete info.husband);
console.log(info);

//nested objects
let mobile={
    color:"black",
    model:"S23",
    samsung:{
        model:"s25",
        color:"white",
        cost:500
    }
}
console.log(mobile);
console.log(mobile.samsung);
console.log(mobile.samsung.color);
console.log(mobile["samsung"]["color"]);

console.log(delete mobile.samsung.cost);
console.log(mobile.samsung);

console.log(mobile.samsung.emicost=3000);
console.log(mobile.samsung);

console.log(mobile.samsung.model="s26");
console.log(mobile.samsung);

//object methods
let mycart={
    item1:"milkshake",
    item2:"laptop",
    item3:"roses",
}

console.log(mycart);

console.log(object.freeze(mycart));

console.log(mycart);
console.log(mycart.item4="biscuit");
console.log(mycart);

console.log(mycart.item1="phone");
console.log(mycart);

console.log(delete mycart.item2);

console.log(delete mycart.item3);

console.log(object.isfrozen(mycart));

console.log(object.keys(mycart));
console.log(object.values(mycart));
console.log(object.entries(mycart));

