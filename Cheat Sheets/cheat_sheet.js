/* 
Scripts

Can write scripts in HTML with the <script> tag with a source to a .js file
<script src="script.js"></script>
*/

/*Variables*/
let count = 0 //Assign 0 to count
console.log(count) //Console log is used to debug code, this gets the value of count

/*Event Listener
Use onclick to call a function when the button is clicked

<button id="increment-btn" onclick="increment()">INCREMENT</button> <- This calls the increment() function when the button is clicked
*/

/*Functions*/
//Used when code is repeated
function buttonPress() {
    console.log("The button was pressed")
}
buttonPress() //Call the buttonpress function

/*Update HTML elements using javascript*/
//document.getElementById("count-el").innerText = 5

let count_el = document.getElementById("HTMLcount") //Set the count_el variable to the representation of the HTML element HTMLcount
count_el.innerText = 5 //Set the element of count_el to 5
//Now the HTML element HTMLcount will be 5


/*The DOM
Document Object Model
How javascript is used to modify a website

When an HTMl element from an HTMl document is accessed in javascript, the javascript is using a model/representation rather than the real thing
*/

/*Strings
Strings are assigned using quotes "", and can be concatenated with the + operator
console.log(message + ", " + username + "!")

When strings and numbers are concatenated, the number becomes a string
*/

/*MDN
MDN, or Mozilla Developer Network is a great resource for Javascript

It is very technical, so it is better to not go too in depth
*/

/*textContent is a better alternative to innerText*/

/*Recap
Script tag
Variables
Numbers
Strings
console.log()
Functions
The DOM
getElementById()
innerText
textContent
*/

/*Practice*/