window.onload = setup;
function setup(){
    let allContent = document.querySelectorAll (".square")
    for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    } //go through all of them and set them to display none
    let toggleButton = document.getElementById ("1");
    toggleButton.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
        // we are going through everyone. we don't necessarily know which one was displayed before.
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[0].style.display ="block" 
             //block > property in style to show as a block element
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
    let toggleButton2 = document.getElementById ("2");
    toggleButton2.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[1].style.display ="block" 
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
    let toggleButton3 = document.getElementById ("3");
    toggleButton3.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[2].style.display ="block" 
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
     let toggleButton4 = document.getElementById ("4");
    toggleButton4.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[3].style.display ="block" 
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
    let toggleButton5 = document.getElementById ("5");
    toggleButton5.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[4].style.display ="block" 
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
    let toggleButton6 = document.getElementById ("6");
    toggleButton6.addEventListener("click", function (e){
        for (let i =0; i<allContent.length; i++){
        allContent[i].style.display = "none"
    }
        if (this.getAttribute("custom-bool")==="off"){
             allContent[4].style.display ="block" 
             this.setAttribute("custom-bool","on")
        }        
       else {
           this.setAttribute("custom-bool","off")
       }
    })
}
