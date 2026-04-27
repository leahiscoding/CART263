// global variables

// audio element
let audioPlayer = document.getElementById("techno")
// play btn
let playButton = document.getElementById("playButton")
// start btn
let start = document.querySelector(".startButton")
// home btn
let home = document.querySelector(".home")
// back btn
let backButton = document.querySelector(".backButton")
// start page
let startPage = document.getElementById("startPage")
// main page
let mainPage = document.getElementById("mainPage")
// first btn
let buttonOne = document.querySelector("#one")
// second btn
let buttonTwo = document.querySelector("#two")
// third btn
let buttonThree = document.querySelector("#three")
// main title menu 
let titleMain = document.querySelector(".title.b")
// row for the button
let buttonRow = document.querySelector(".buttonRow")
// pg 1 canvas
let pageOne = document.querySelector(".pageOne")
// pg 2 canvas
let pageTwo = document.querySelector(".pageTwo")
// pg 3 canvas 
let pageThree = document.querySelector(".pageThree")
// song array for randomising  music
let songArray = [
    "TechnoA.mp3",
    "TechnoB.mp3",
    "TechnoC.mp3",
    "TechnoD.mp3",
    "TechnoE.mp3",
    "TechnoF.mp3"
]
let songIndex = 0


// when you're using an array you're always accessing by the number 
function chooseSong(){
    songIndex = Math.floor(Math.random()*songArray.length)
    // selected randomly number and we will choose
    audioPlayer.src = `asset/audio/${songArray[songIndex]}`
}


//audioPlayer.load()

function playAudio(){
    chooseSong()
    // if audio player is paused
    if(audioPlayer.paused){
        
   // console.log(audioPlayer)
   // audio player's volume is 0.3
    audioPlayer.volume = 0.3
    // audio player is not mused
    audioPlayer.muted = false;
    // play audio player
    audioPlayer.play()
    } else {
        // otherwise this is false
        stopAudio()
    }
}

function stopAudio(){
    audioPlayer.pause()
}

// add eventlistener for each button
// play audio for play button
playButton.addEventListener("click", playAudio)
// navigate back to homepage for home button
home.addEventListener("click",switchToStart)
// show main menu for back button
backButton.addEventListener("click", showMainMenu)

//source: https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
// start the website for start button
start.addEventListener("click",switchToMain)
// btn 1 for facemesh
buttonOne.addEventListener ("click", switchToOne)
// btn 2 for handpose
buttonTwo.addEventListener ("click", switchToTwo)
//btn 3 for speech recognition
buttonThree.addEventListener ("click", switchToThree)

// if start page is not none, start page becomes none and main page shows
function switchToMain(){
    if(startPage.style.display !=="none"){
        startPage.style.display = "none";
        mainPage.style.display = "block";
        // Reset to the three-button menu whenever we enter the main screen.
        showMainMenu()
    }
}

// if the main page is on, make sure the main page is none and start page is on
function switchToStart(){
    if(mainPage.style.display == "block"){
        hideDetailPages()
        backButton.style.display = "none"
        home.style.display = "block"
        titleMain.style.display = "block"
        buttonRow.style.display = "flex"
        startPage.style.display ="block"
        mainPage.style.display ="none"
    }
}

// switch to page one
function switchToOne(){
    if(mainPage.style.display == "block"){
        showDetailPage(pageOne)
    }
}

// switch to page two
function switchToTwo(){
    if (mainPage.style.display == "block"){
        showDetailPage(pageTwo)
    }
}

// switch to page three
function switchToThree (){
    if (mainPage.style.display == "block"){
        showDetailPage(pageThree)
        console.log("switchToThree")
    }
}

// I had a bit of an issue nesting pages—I got help with gen AI to troubleshoot my original code.
function hideDetailPages(){
    pageOne.style.display = "none"
    pageTwo.style.display = "none"
    pageThree.style.display = "none"
}

function showDetailPage(page){
    // Opening a detail page swaps the home icon for the back button.
    hideDetailPages()
    titleMain.style.display = "none"
    buttonRow.style.display = "none"
    home.style.display = "none"
    backButton.style.display = "block"
    page.style.display = "block"
}

function showMainMenu(){
    // Returning to the menu restores the title, colored buttons, and home icon.
    hideDetailPages()
    titleMain.style.display = "block"
    buttonRow.style.display = "flex"
    home.style.display = "block"
    backButton.style.display = "none"
}
