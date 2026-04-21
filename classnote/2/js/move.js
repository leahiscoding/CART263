window.onload = function (){
    console.log("move");
    // we want to do something when the mouse is over the box
    let drawBox = document.querySelector("#draw-box-a");

    //A: add event listener + callback
    drawBox.addEventListener ("mousemove", moveCallBack);

    function moveCallBack(e){
    console.log("mouse move");
    //B: note these are the same...
    console.log(this);
    console.log(e.target);

    //C: get the mouse coordinates relative to the window...
   // drawBox.innerHTML = `x:${e.clientX}, y:${e.clientY}`;

    let rect= this.getBoundingClientRect();
    console.log(rect);
    //Difference to ensure coords are relative
    let offsetX = e.clientX-rect.x;
    let offsetY = e.clientY-rect.y;
    //drawBox.innerHTML =`offset_x: ${offsetX}, offset_y:${offsetY}`;

    let pointDiv = document.createElement ("div");
    pointDiv.classList.add("point");
    pointDiv.style.left = offsetX+"px";
    pointDiv.style.top = offsetY+"px";
    this.appendChild(pointDiv);
}
}

