let d=document;
console.log(d);

console.log(d.head);
console.log(d.body);

console.log(d.tittle="jeevansaathi");
console.log(d.URL);

let idName=document.getElementById('demo');
console.log(idName);
idName.style.color="red";
idName.style.background="black";

let cls=document.getElementsByClassName('test');
console.log(cls);
cls[2].style.color="red";

let section=document.getElementsByTagName('section');
console.log(section);
section[1].style.color="goldenrod";

let query1=document.querySelector('button');
console.log(query1);

// let query=document.querySelector('#demo1');
// console.log(query); // to target particular button using tne id.

let queryAll=document.querySelectorAll('button');
console.log(queryAll);

let artAll=document.querySelectorAll('article');
console.log(artAll);
artAll[0].style.color="brown"