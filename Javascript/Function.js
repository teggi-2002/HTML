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


