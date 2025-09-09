let firstWay='Hii Guys';
let secondWay="hello there im Tejashwini";
let thirdWay=`but my full name is Tejashwini S Teggi`;
console.log(firstWay,typeof firstWay);
console.log(secondWay,typeof secondWay);
console.log(thirdWay,typeof thirdWay);

let empId=114;
let empName="Tejashwini S Teggi";
let Salary=100000000000000000;
console.log("The Employee name "+empName+" has the ID "+empId+" with the salary "+Salary);

//backtick is also called as template string
//in backtick implement interpolation(${}) that will  fetch the value of the variable.

console.log(`The employee name ${empName} has the id ${empId} with the salary ${Salary}`);


//String methods

//1.length
let strLength="JavaScript";
console.log(strLength.length);

let takeInput = prompt(`enter the password`);
if(takeInput.length<6)
{
    alert('need more than 6')
}
else{
    alert(`password is sucessfull`)
}

//how to reverse a string in javascript
//split converts string to array
//join converts array to string
//2.reverse, 3.split , 4.join
let reverse=`goldenrod`;
console.log(reverse.split('').reverse().join(''));


//5.CharAt 
let charAt="hello";
//in charAt(1), 1 is the index value assigned to hello so it will give me the output e, if i give 0 it will give me h , so for 2-l , 3-l, 4-o 
console.log(charAt.charAt(1));
console.log(charAt.at(2));

//in charAt(-1), if negative values are not there then no values will be printed , it will be empty. 
console.log(charAt.charAt(-1));
console.log(charAt.at(-1));

//6.Uppercase , 7.Lowercase
console.log(charAt.toUpperCase());
console.log(charAt.toLowerCase());

//8.emptyspace , 9.trim

let emptySpace = "           space";
console.log(emptySpace);
console.log(emptySpace.trim());

//10.concat,11.indexOf,12.includes
console.log(charAt.concat(reverse,strLength));
console.log(charAt.indexOf('h'));
console.log(charAt.includes('e'));


//13.slice
let str='Tuesday';
console.log(str.slice(2,4));
console.log(str.slice(1,5));
console.log(str.slice(2));

//14.padend , 15.padstart
let invoice="INV";
console.log(invoice.padEnd(6,"007"));
console.log(invoice.padStart(6,"007"));

