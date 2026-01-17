function setup () {
    createCanvas (600,600);
    background (0);
}

function draw (){
    
    fill (255);
    textSize (32);
    text ("test", width/2, height/2);
    // ask sabine why there's two tests
    textAlign (CENTER, CENTER);
    
    translate(25, 25)
    textSize (16);
    textAlign (LEFT, TOP);
    for (let i = 0 ; i < 10; i ++)
        {
            let x = 20 * i;
            // because we're incrementing 20 by every time
            text (i, x, 0);
            // the text in here is just whatever the value of i is
        }
    for (let i = 0; i <= 15 ; i ++)
    {
        let y = 30 * i;
        text (i, 0, y);
    
    }
}
