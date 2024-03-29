//Arthmetic operators
/*
let a=50;
let b =51;
let c1,c2,c3,c4;

c1=a+b;
c2=a-b;
c3=a*b;
c4=a**b;
c2=++a;
c1=--b;
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

*/

//Arthmetic Assignment Operators

/*
let x=15;
 x=x+10;
 console.log(x);

 x+=50;
 console.log(x);

 x-=10;
 console.log(x);

 x*=20;
 console.log(x);

 x/=3;
 console.log(x);
*/


// Math functions
/*

 let c;
 c=Math.PI;
 console.log(c);

 c=Math.E;
 console.log(c);


 c=Math.round(5.8);
 console.log(c);

 c=Math.round(5.2);
 console.log(c);

 
 c=Math.floor(5.2);
 console.log(c);

 
 c=Math.ceil(5.2);
 console.log(c);

 
 c=Math.sqrt(5.2);
 console.log(c);

 
 c=Math.abs(-5.2); //convert the negative number into positive number
 console.log(c);

 
 c=Math.trunc(5.254); /// ithu ena panum nah decimal values ah remove panitu whole number ah kudukum 
 console.log(c);

 
 c=Math.pow(2,5);// first given number and secind value  is power value
 console.log(c);

 c=Math.min(5.2,10,.2,100,125); // show the minimum values in the list 
 console.log(c);

 
 c=Math.max(5.2,11,0.2,548,78956);// show the maximum value in the list
 console.log(c);

 
 c=Math.random(); // it give the random number to the values
 console.log(c);

 
 c=Math.floor((Math.random()*10+1)); // give the random number but only in the range that we given it
 console.log(c);

 
 c=Math.sign(-5.2);// it is use to tell the sign of the integer
 console.log(c);

 */



// Sample program to test
/*
let price = 50000;
let product = "Iphone";
let tax = 3265.5;
console.log(product);
var totalamount= price+tax;
console.log(totalamount);
*/

// second sample program 

/*
var fruitname="Apple";
var count=50;
var price=5500;
let total=count*price;
console.log(fruitname);
console.log(total);
*/


//incremnet operators  
/*
 a=10;
 b=a++;
 console.log(b);// the output will be 10 only bcoz whenever the a met the a only then the answer become 11 otherwise (a) value will be 10 

// but if we increment the operators like ++a means the output will be 11 bcoz (a) value athutha (a) value ah pakuthukula ++increment value met panitu tha varuthu so (a) value automatically incremnet aakirum
a=10;
b=++a;
console.log(b);
*/

/*
let a="Rohtih";
let b="Ragavender";
function Sum(){
    sum=a + b;
    console.log(sum);
}
Sum();
*/


// sample function excersies
/*
let factor="Kamal";
let fplayer="Dhoni";
let fmovie="Anbe sivam";
function fav(){
    console.log("Favourite Actor:",factor);
    console.log("Favourite Actor:",fplayer);
    console.log("Favourite Actor:",fmovie);
}
fav();
*/


// sample Area of Triangle program 

/*

function area(length,breadth){
    c=length*breadth;
    console.log("The area of triangle is :",c);
}
let length=50;
let breadth=20;
 area(50,20);
*/

// condition statements 

//Eaxmple 1 for if condition:
/*
let rain = true;
if (rain) {
    console.log("Take an umbrella");
} else {
console.log("Enjoy the sunshine");
}
*/


//Example 2 for if condition:

/*
let homework=true;
if(homework){
    console.log("Great job");
}
else{
    console.log("Finish your work before playing");
}
*/

//Example 3 for if conditions

/*
var cookiesleft=true
if(cookiesleft){
    console.log("would you like a cookie");
}
else{
    console.log("Time to brake more cookie");
}
*/

//Logical conditons AND,OR,NOT
//AND- Any one false appear all condition would be false 
//OR-Any one true is enough

//Example for logical condition

/*

let mark=45;
if (mark>=35 && mark<=55)
{
    console.log("Student is pass the exam");
}

if(mark>=55){
console.log("Students is obtain good marks");
}

if(mark<=35){
console.log("Student is fail in the exam");
}

*/


// if else example program
/*
var seasonYear = "summer";
if (seasonYear == "Spring") {
    console.log("Enjoy the blooming flower");
}

if (seasonYear == "summer") {
    console.log("Have fun in the sun");
}

if (seasonYear == "autumn" || "Fall") {
    console.log("Admire the colourful leaves");
}

if (seasonYear == "winter") {
    console.log("Bundle up and stay warm");
}

*/


/*
let hours=new Date();
let hrs=hours.getHours();
alert(hours)
 */



/*
let mark = prompt('Enter the Grade');
switch(mark){
    case 'S':
        document.write("Super Grade");
        break;
    case 'A':
        document.write("Excellent Grade");
        break;
    case 'B':
        document.write("Good Grade");
        break;
    case 'C':
        document.write("Pass Grade");
        break;
    case 'E':
        document.write("Fail");
        break;
    default:
        document.write('undefine');
}
*/

/*
let i =5;
for(let i =1;i<=10;i++){
    document.write('Number is :',i);
}
*/

/*
let i=5;
for(let i=1;i<=25;i++){
    if(i%2==0){
        document.write("<br>",i)
    }
}
*/

/*
let iboss= confirm("Are you boss of this company")
alert(iboss)
*/

/*

const n = 5;
for (let i = 0; i < n; i++) {
    let row = ''; //ithu  vanthu aintha pattern print pana use aakum
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === 4 || j === 4) {
            row += '* ';
        }else{
            row += '  ';
        }
    }
    console.log(row);
}
*/


/*
const p = prompt("Enter the size of the pattern");
for (let i = 0; i < p; i++) {
    let row = '';
    for (let j = 0; j < p; j++) {
            if (i==4||i+j==4||i==0) {
            row = row + '* ';
        } else {
            row = row + '  ';
        }
    }
    document.write(row);
}
*/

/*
let a =15;
 let i=0;
while(i<=a){
    console.log(i);
    i++;
} */

/*
const person1 = {
    name: 'Rohith',
    age: 23
}

const person2 = {
    name: 'Manju',
    age: 25
}

function Person(name, age) {
    console.log(name)
    console.log(age)
}

Person(person1.name, person1.age)
Person(person2.name, person2.age)

*/

function convert(){
    let cmVal=Number(document.getElementById('input').value)
    let inchVal=cmVal/2.54
    let result=document.getElementById('result')
    result.innerHTML=inchVal
}