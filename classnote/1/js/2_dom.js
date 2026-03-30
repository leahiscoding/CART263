window.onload = setup
function setup(){
    console.log("running setup");
}

console.log(document.getElementById("one"));

// when a browser loads a page, it reads the HTML top to bottom, building the DOM(the tree of elements)as it goes.

/*
// HEAD placement - runs immediately ❌
console.log(document.getElementById("one")); // null — too early!

// HEAD placement - inside a function ✅
function setup() {
    console.log(document.getElementById("one")); // works — called later!

This is why you'll often see developers either
    - Place scripts at the bottom of <body>, or
    - use window.onload/DOMContentLoaded
    - use the "defer" attribute on the script tag

document.getElementById() returns ONLY the 1st element it encounters in the DOM tree 
with the matching ID. Ensure that all your elements have unique ID's
*/

console.log(document.querySelector("#one"));
// different patterns as arguments - so to access an element by the ID > #
// document.querySelect()function ALWAYS returns the first match found

// get elements by tag name except that it takes a tag name (a,ul,li,etc) 
// instead of an ID and returns all elements in teh page with the required tag

// even if there's only one element with that tag name, Javascript will return a list (array)
console.log(document.getElementsByTagName("div"));

// since what is being returned is an array: we use array syntax to access:
console.log(document.getElementsByTagName("div").length);
console.log(document.getElementsByTagName("div"[0]));

// you pass a class name to be matched instead of a tag name
console.log (document.getElementsByClassName("square_shape"));
console.log(document.getElementsByClassName("square_shape").length);
console.log(document.getElementsByClassName("square_shape")[0])

// if we don't want to return an array but the first match
console.log(document.querySelector(".square_shape"))

//generic JS method for getting hold of ALL elements by CLASS NAME
console.log(document.querySelectorAll(".square_shape"));
console.log(document.querySelectorAll(".square_shape").length);
console.log(document.querySelectorAll(".square_shape")[0]);

// inner HTML property holds a reference to the HTML content within a articular element,
// allowing you to easily access or change content  

// innerHTML property > outputs all the HTML markup within the specified element
console.log(document.getElementById("two").innerHTML);

//text context pertaining to a particular html element > it does not parse HTML

console.log(document.getElementById("two").textContent);

//accessing attribute properties of a given element(s). 
//
// if an attribute is not present for an element, the result will return null
// if there is more than one value for a given property - the method will return all values as a STRING

console.log(document.querySelector("#two").getAttribute("class")); //square_shape another_class
console.log(typeof(document.querySelector("#two").getAttribute("class"))); //string

/*typeof > what kind of thing is this? —checking that a value is what you expect before using
typeof "hello"          // "string"
typeof 42               // "number"
typeof 3.14             // "number"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof { name: "Ali" }  // "object"
typeof [1, 2, 3]        // "object"  ← arrays are objects!
typeof null             // "object"  ← famous JS quirk/bug
typeof function(){}     // "function"
typeof Symbol()         // "symbol"

typeof null        // "object"  ← NOT "null" — this is a historic bug in JS
typeof []          // "object"  ← NOT "array" — use Array.isArray() instead
typeof NaN         // "number"  ← "Not a Number" is technically type number 

let userInput = "42";

if (typeof userInput === "string") {
    console.log("It's a string!");
}

if (typeof someVar === "undefined") {
    console.log("Variable doesn't exist yet");
}
*/

//class associated with an element by using classList > iterable list
console.log (document.querySelector("#two").classList);

// access style attributes of elements

// element(s) with inline style attributes
console.log(document.querySelector("#one").style);
// access the style object and then a particular property
console.log(document.querySelector("#six").style.width);

// Modifying DOM elements

// the changes made are not persistent

// super useful properties .parentElement > return immediate parent of that element
console.log(document.querySelectorAll("span")[0].parentElement)
console.log(document.querySelectorAll("span")[0].parentElement.parentElement)

// .children> immediate children
console.log(document.querySelector(".wrapper_flex_box").children)
console.log(document.querySelector(".wrapper_flex_box").children[0])

//modify the HTML content
document.querySelector("#two").children[0].innerHTML = "<h2>this is now a header</h2>";

//modify the TEXT content

// get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
// go through each element
for(let singleSquare of allSquareShapes){
    //get children
    console.log(singleSquare.children[0])
    singleSquare.children[0].textContent+=" adding content"
}


console.log(document.querySelectorAll(".square_shape").children)

//more complex pattern

//get the group
for(let singleSquare of allSquareShapes){
    //console.log("HEREE")
    console.log(singleSquare)
    // get children
    if(singleSquare.querySelector("p span")!==null){
        console.log(singleSquare.querySelector("p span"))
        singleSquare.querySelector("p span").textContent+="Other Content"
    }
}



console.log(document.querySelectorAll("span"))

// modify attribute

// adding/removing from the classLIst

document.querySelector(".square_shape").classList.remove("square_shape") //first one only
//console.log(document.querySelector(".square_shape").parentElement)
document.querySelector("p span").classList.add("change_span");
//console.log(document.querySelector("p span").parentElement)

//modify attributes using setAttribute()

document.querySelectorAll(".another_class")[0].setAttribute("id","newTest");
// adding newClass id to the another_class class
console.log(document.querySelectorAll(".another_class")[0]);

//remove attributes using the removeAttribute()

//second elements grandparent
let element = document.querySelectorAll("span")[1].parentElement.parentElement
element.removeAttribute("id")
console.log(element)

//dynamically change the style attribute of an element 
// you can either add anew or modify

// add 
document.querySelector("#four").style.background="cornflowerBlue";
document.querySelector("#four").style.borderColor="darkblue";
// modify
document.querySelector("#one").style.background ="pink";
document.querySelector("#one").style.borderColor ="white";

console.log(document.querySelector("#one"))

//Adding Elements to the DOM

/* to add a new element to the HTML DOM
> create the element(element node) using the createElement()
> append this new element to an existing element
*/

// appendChild() method which adds the element at the end of the parent

    // new element
let newDiv = document.createElement("div"); // create a new empty box
newDiv.classList.add("square_shape") // give it a CSS class
newDiv.innerHTML = "NEW ELEMENT"; // put text inside it
newDiv.style.backgroundColor = "purple"; // paint it purple 

    // access parent element
let parentElement = document.querySelector(".wrapper_flex_box") // find where you want to put it 
parentElement.appendChild(newDiv)

console.log(document.querySelector(".wrapper_flex_box").parentElement);
/*
`appendChild` literally means **"attach this child to this parent"** — it **places your new div inside** `.wrapper_flex_box`, at the **end** of whatever is already there.
```
.wrapper_flex_box  (parent)
    ├── existing element
    ├── existing element
    └── 🆕 newDiv  ← appended HERE (always last)

    BEFORE appendChild:
.wrapper_flex_box
    └── [existing stuff]

AFTER appendChild:
.wrapper_flex_box
    ├── [existing stuff]
    └── 🟣 purple div "NEW ELEMENT"
    */

    // insert before
let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape")
newDivTwo.innerHTML = "New Element Two";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"
    // access parent element
let sibling = document.querySelector("#three");
let parentAgain = document.querySelector('.wrapper_flex_box')
parentAgain.insertBefore(newDivTwo,sibling); 

console.log(document.querySelector("#three"));

// removing elements from the DOM

// remove elements in the setup

let parentElementToRemove = document.querySelector(".wrapper_flex_box");
let toRemove = document.getElementById("six");
parentElementToRemove.removeChild(toRemove);

