let audioPlayer = document.getElementById("techno")
let playButton = document.getElementById("playButton")
let start = document.querySelector(".startButton")
let home = document.querySelector(".home")
let backButton = document.querySelector(".backButton")
let startPage = document.getElementById("startPage")
let mainPage = document.getElementById("mainPage")
let buttonOne = document.querySelector("#one")
let buttonTwo = document.querySelector("#two")
let buttonThree = document.querySelector("#three")
let titleMain = document.querySelector(".title.b")
let buttonRow = document.querySelector(".buttonRow")
let pageOne = document.querySelector(".pageOne")
let pageTwo = document.querySelector(".pageTwo")
let pageThree = document.querySelector(".pageThree")
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
    if(audioPlayer.paused){
    console.log(audioPlayer)
    audioPlayer.volume = 0.3
    audioPlayer.muted = false;
    audioPlayer.play()
    } else {
        stopAudio()
    }
}

function stopAudio(){
    audioPlayer.pause()
}

playButton.addEventListener("click", playAudio)
home.addEventListener("click",switchToStart)
backButton.addEventListener("click", showMainMenu)

//source: https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
start.addEventListener("click",switchToMain)
buttonOne.addEventListener ("click", switchToOne)
buttonTwo.addEventListener ("click", switchToTwo)
buttonThree.addEventListener ("click", switchToThree)

function switchToMain(){
    if(startPage.style.display !=="none"){
        startPage.style.display = "none";
        mainPage.style.display = "block";
        // Reset to the three-button menu whenever we enter the main screen.
        showMainMenu()
    }
}

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

function switchToOne(){
    if(mainPage.style.display == "block"){
        showDetailPage(pageOne)
    }
}

function switchToTwo(){
    if (mainPage.style.display == "block"){
        showDetailPage(pageTwo)
    }
}

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
