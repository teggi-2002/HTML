//primitive data type is object dereferencing and immutable

let a=10;
let b=20;
console.log(a);
console.log(b);

a=b;
console.log(b);
console.log(a);

b=40;
console.log(b);
console.log(a);

//non primitive data type is referencing and mutable

let obj={
    id:1,
    name:"Tejashwini"
}
let obj1={
    id:2,
    name:"Harshith"
}

console.log(obj);
console.log(obj1);

obj=obj1;
console.log(obj);
console.log(obj1);

obj1.name="Teggi";
console.log(obj);
console.log(obj1);

//Primitive Data Types
let number=100;
console.log(number,typeof number);

let convertToBig=100n;
console.log(convertToBig,typeof convertToBig);

console.log(BigInt(1000));
//console.log(BigInt("hi"));
//console.log(BigInt("null"));

console.log(Number(null));
console.log(BigInt(true));
console.log(BigInt(false));
//console.log(BigInt(undefined));

console.log(10n+10n);
console.log(5n+BigInt(5));

// == (double equals) and === (Triple equals)
//Equals checks only values

console.log(3==4);
console.log("2"===2);

//=== checks both values and datatype
//if one value is false then the result is false
console.log("2"===2);
console.log(5+"3"=="5"+3);
console.log(true===Boolean(1));
console.log(10>5<4);
console.log(3>4>=5);
let t=9;
if(t)
{
    console.log("true value");
}
else{
    console.log("False value");
}

//null
let mug;
console.log(mug);

console.log(typeof undefined);

let nullValue=null;
console.log(nullValue,typeof nullValue);

//null called error or BigInt64Array