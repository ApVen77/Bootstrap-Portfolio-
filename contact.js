

// const btn = document.createElement('button');
// btn.innerText = 'JS Practice';
// document.body.appendChild(btn);
// btn.addEventListener('click', () => {
//     alert(
//         'Button Clicked'
//     );
// });

var myAge = "18"; 


prompt  ("How old are you?")
if (myAge <= 18 || myAge > 30) {
    alert ("Please Enter the Site");
} else { 
    alert ("next time");
}; 


function getAverage (a,b) {

    var average = (a * b) / 2;
    console.log (average);
} 

getAverage(10, 10);
if (getAverage > 20) {
    
console.log ("Hello!"); } else {
    console.log ("next time");
}

var bird = {type: 'Birds', sound: 'Swack!', habitat: 'Austrlian Forests!'};
var panther = {type: 'Black Panthers', sound: 'Roar!', habitat: 'Rainforest!'};

{
    console.log (bird.type + ' say ' + bird.sound);
    document.write (panther.type + ' say ' + panther.sound + ' and ' + ' live in ' + panther.habitat);
};

document.getElementsByClassName ("links") 
for (i= 0; i< 10; i++) {

    if (i === 5 || i === 3) {

        continue; 
    }
    console.log (i);

    if (i === 7) {
        break; 
    }
}

console.log ("I have broken out of the loop");

var myString = "I am a darn tootin string";

console.log (myString.length);

var myArray = [];

myArray [0] =25
myArray [1] = 35
myArray [2] = true
myArray [3]= "hello"

console.log (myArray);

var myArray2 = [25, 35, "Hello!", false];
console.log (myArray2[2]);

var myArray3 = new Array ()
var myArray4= new Array (5)

console.log(myArray2.forEach);

var myString = "  I am April "; 
var string1= "abc";
var string2 = "def";
var str = "hello world"

var str2 = str.split(2,9);
console.log (str2);
console.log (string1=== string2);
document.write (myString.toUpperCase());
console.log (myString.toLowerCase());

var myFooter = document.getElementsByTagName("h1");
myFooter [0].innerHTML;
myFooter. textContent= "<h1> I live in Colorado!! </h1>";
// myFooter.setAttribute("style", "position: relative; left; 10px;");
console.log (myFooter);

var myString = new String()
console.log (myString= "Methods and Functions");
console.log (myString.length);
myString.toLowerCase();

myArray = new Array ();
myArray [0] = "January";
myArray [1] = 30;
myArray [2] = 1986;

var myCar = new Object();
myCar.maxspeed= 50;
myCar.driver = "John";
myCar.make= "Cadillac";
myCar.model= "CTS-Z";
myCar.color= "Cotton Candy";



    document.write (myCar.make +   myCar.model);

var myDate = new Date()

var myPastDate = new Date(1986, 0, 30, 10, 30, 33);

var myFutureDate = new Date (2025, 13, 15, 11, 12, 13);

console.log (myPastDate);

var newLi = document.createElement("a");
console.log (newLi);
// var menu = document.getElementsByName ("navbar-brand").getElementsByTagName ("container")[0];
// menu.insertBefore(new h2, menu.getElementsByTagName ("h1")[0]);

var misArray = new Array() 

misArray [0]= "Kids";
misArray [1]= "Men";
misArray [2]="Girls Clothing";
misArray [3]="Women";
misArray [4]= "Baby";
misArray [5]= "All";
misArray [6]= "10.99";
console.log (misArray[5], misArray[2], misArray  [6]);

var myH2= document.getElementsByClassName ("test");
myH2[0].innerHTML= "<h2>Hello!</h2>"
console.log (myH2[0]);
var myH3= document.getElementsByClassName ("test");
document.getElementsByClassName("test"),appendChild = myH3;
console.log (myH3 [0]);
myH3.appendChild= "<button> Hello!</button>"

var name="April Long";
var pizzaCount= 15;
var isHungry= true; 
// Don't touch this code :-)
var totalCost = pizzaCount * 5.00;

console.log("Welcome: " + name);

console.log("Pizzas cost $5 each");

console.log("Your total is: $" + totalCost);

console.log("Still Hungry: " + isHungry);









 

