window.onload = setup;

function setup() {
//     console.log("events!")
//     let introSection = document.querySelector("#intro");
//     introSection.addEventListener("click", function(e){
//     console.log(this);
    // the element the listener is attached to (i.e., introSection)
//     console.log(e)
    // e.target: the element that was actually clicked (could be a child element inside introSection)

    //a:
//     this.style.background = `rgba(214,110,239, .5)`
//     console.log(document.querySelector(`#${this.id}  p`));
//     document.querySelector(`#${this.id} p`).style.background = `rgba(214,110,239,.75)`;
//     });
// }

    /*
    
    this -> <div id="intro">
    this.id > "intro"
    the template literal becomes "#intro p"
    querySelector("#intro p") finds the <p> inside #intro
        
    selector string `#${}`

    The thought process in plain English

    What selector would I write if I were hardcoding it? → "#intro p"
    What part of that is the thing that changes? → "intro" — the id
    How do I get that id at runtime? → this.id
    How do I slot it into the string? → template literal: `#${this.id} p`
    */

// responding to a mouse click event


 let introSection = document.querySelector("#intro");
  introSection.addEventListener("click", function (e) {
      console.log(this);
     //this.style.setProperty("opacity",".5");
      //same as "this.style.opacity =.5;" 
    
  })
  // the code is more dynamic now => why and how?

  // option 1: setting another style property as an inline property
    // set a style attribute of a child element
     // document.querySelector(`#${this.id} p`).style.setProperty("opacity",".75");

  /*-> this solution will not work - because the parent element has the lower opacity value... 
      let's rework our solution*/

     /*setting the opacity of the #intro div to 50%

      however, the problem is there is no way to tell the <p> inside to opt out
      even if you then try to set the <p> to full opacity, it will not work
      THE CHILD CAN NEVER BE MORE OPAQUE THAN ITS PARENT 
      */

 // Add a css-class to an element
 /* we can access and assign any css classes 
 that are defined in a style sheet or within the style tags
 within the same html page */    

 introSection.addEventListener("click", function(e) {
    console.log(this);
    this.style.background = `rgba(214,110,239,0.5)`;
    /* this only changes the background colour but doesn't affect the child element at all
    now the <p> is free to have its own separate style*/
    document.querySelector(`#${this.id} p`).classList.add("intro-section-p-active");
 });

/* instead of writing another style.setProperty(...) line for the <p>, the notes introduce classList.add
find the <p> inside of the #intro

find the <p> inside #intro, and add the CSS class intro-section-p-active 
that class would be defined somewhere in your stylesheet with whatever styles you want
you've written the visual rules once in CSS, and now JS just toggles the class on and off

this is considered better practice > separation of concerns—
your CSS file owns what things look like, and your JS just decides when to apply a look.
it's also easy to reverse/removing inline styles
*/

// looping

let allSections = document.querySelectorAll (".mouseclick-active-section");
// go through each section and apply the event listener 

for (let el of allSections) {
    // access to all parents divs
    console.log(el)
    // add click to each element
    el.addEventListener("click", function (e) {
    console.log(this);
if(this.getAttribute("custom-bool") === "inactive"){
    this.setAttribute("custom-bool", "active");
    console.log("is inactive")
    console.log(this.id)
    // : : new access the class of parent (this)
    let classToAdd = `${this.id}-section-active`;
    this.classList.add(classToAdd)

    // : : new access the class of child
    let classToAddP = `${this.id}-section-p-active`;
    document.querySelector(`#${this.id} p`).classList.add(classToAddP)
}

/*So - what changed?
Access all the sections with the same class name: mouseclick-active-section
Use a for loop to go through all the found elements and then execute exactly the same instructions as previously....*/

// toggle the behaviour

/* boolean toggle: when mouse clicks on the element => alternate style btwn darker and original
custom boolean attribute: custom-bool that has been assigned to each element

if/else construct to decide either to apply dark or light

lighter > remove the relevant css and switch the custom-bool

*/
else{
    console.log("is now active");
    this.setAttribute("custom-bool", "inactive");
    let classToRemove = `${this.id}-section-active`;
    this.classList.remove(classToRemove);
    // : : new access the class of child
    let classToRemoveP = `${this.id}-section-p-active`;
    document.querySelector(`#${this.id} p`).classList.remove(classToRemoveP)

}

});
/*The if block is inside the for loop but outside the callback function. That means it runs immediately when the page loads — not when you click. And at that point, this doesn't refer to any DOM element — you're in a regular for loop, not inside an event listener, so this has no meaning here. That's why it errors.
The fix is to move the if inside the callback, and use el or this consistently: */
}

document.querySelector ("#bubbleButton").addEventListener("click", function(){
    console.log("button clicked");
   
    let bubble = document.createElement("div");
    bubble.classList.add ("bubble");
    bubble.style.left = `${Math.random()*(window.innerWidth-200)}px`;
    bubble.style.top = `${Math.random()* (window.innerHeight-200)}px`;

    let r = Math.ceil(Math.random()*255) //new Math.celi
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);

    bubble.style.background = `rgba(${r},${g},${b})`;
    document.getElementById("top-layer").appendChild(bubble)
})



}


