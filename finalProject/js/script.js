let audioPlayer = document.getElementById("techno")
let playButton = document.getElementById("playButton")
let start = document.querySelector(".startButton")
let home = document.querySelector(".home")


audioPlayer.load()

async function playAudio(){
    if(audioPlayer.paused){
      audioPlayer.volume = 0.25
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
