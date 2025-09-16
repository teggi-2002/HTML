//named function
result(40,30)
function result(a,b)
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);    
}
result(10,20)
result(1,2)

//anonymous function
//function()
//{

//}
//()
let test=function(msg)
{
    console.log("user login"+msg);
}
test("Successfull")

//default parameter
let message=function(x="saish")
{
    console.log(x+" Recently married boy");
}
message()

//arrow function
let demo=(x,y)=>
{
    console.log(y+" is a sister of "+x);
}
demo("naveen","niveditha")

//rules of arrow function
//to reduce the syntax of arrow function

//rule 1---->>>> when we have single statements we no need curly braces
let a=()=>
    console.log("hello world");

//rule 2----->>>> if two or more statements use curly braces
let b=()=>
{
    let num=100;
    console.log(num);
}
b()


//rule 3----->>>> when return keyword inside the function use the curly braces.
let c=()=>{
    return "hello"
}


//rule 4----->>>> when the return keyword inside the function use printing statement outside the function
let d=()=>{
    return "hello"
}
console.log(d());


//rule 5----->>>> when use printing statement inside dont use outside the function again.
let e=()=>{
    console.log("hello");
}
console.log(e())

//IIFE
function normal1()
{
    console.log("what ate yesterday?");
}
console.log("anything");
normal1()
,
(function()
{
    console.log("yesterday i ate biriyani");
})
()
;

//setting the background color at a time one color
(function()
{
    console.log("click");
    document.body.style.background='lightpink'
})()
;
(function()
{
    console.log("jkhhj");
})()

//callback function
function result1(callback,callback1)
{
    console.log(callback(10,20))
    console.log(callback1(4,6))
}
function add1(a,b)
{
    return a+b;
}
function sub1(a,b)
{
    return a-b;
}
result1(add1,sub1)

//pizza example on callback
function orderPizza(flavour,owner,callback)
{
    console.log("order pizza");
    console.log("ordered"+flavour+" pizza by "+owner);
    setTimeout(() => {
        console.log("pizza is ready");
        callback(owner)
    }, 2000);
}

function eatpizza(x)
{
    console.log(x+" eating pizza ");
}
orderPizza("cheeze","kiran",eatpizza)

//nested function
function t()
{
    let t=100;
    function s()
    {
        console.log(t);
    }
    s()
}
t()


//nested function 2nd example
function outer()
{
    let count=0;
    return function inner()
    {
        count++
        console.log(count);
    }
}
let counter=outer();
counter()
counter()
counter()
counter()
counter()