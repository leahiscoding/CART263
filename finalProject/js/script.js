let audioPlayer = document.getElementById("techno")
let playButton = document.getElementById("playButton")
let start = document.querySelector(".startButton")
let home = document.querySelector(".home")
let startPage = document.getElementById("startPage")
let mainPage = document.getElementById("mainPage")
let buttonOne = document.querySelector("#one")
let buttonTwo = document.querySelector("#two")
let buttonThree = document.querySelector("#three")


audioPlayer.load()

async function playAudio(){
    if(audioPlayer.paused){
      audioPlayer.volume = 0.1
      audioPlayer.muted = false;
        await audioPlayer.play()
    } else {
        stopAudio()
    }
}

function stopAudio(){
    audioPlayer.pause()
}

playButton.addEventListener("click", playAudio)
home.addEventListener("click",switchToStart)

//source: https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
start.addEventListener("click",switchToMain)
buttonOne.addEventListener ("click", switchToOne)
buttonTwo.addEventListener ("click", switchToTwo)
buttonThree.addEventListener ("click", switchToThree)

function switchToMain(){
    if(startPage.style.display !=="none"){
        startPage.style.display = "none";
        mainPage.style.display = "block";
    }
}

function switchToStart(){
    if(mainPage.style.display == "block"){
        startPage.style.display ="block"
        mainPage.style.display ="none"
    }
}

function switchToOne(){
    if(mainPage.style.display == "block"){
        buttonOne.style.display = "block"
        mainPage.style.display = "none"
    }
}

function switchToTwo(){
    if (mainPage.style.display == "block"){
        buttonTwo.style.display = "block"
        mainPage.style.display = "none"
    }
}

function switchToThree (){
    if (mainPage.style.display == "block"){
        buttonThree.style.display = "block"
        mainPage.style.display = "none"
    }
}