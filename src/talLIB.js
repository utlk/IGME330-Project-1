
(function()  {
    "use strict";
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
   
    //Draws a sinWave
    function drawSin(ctx, stepNum, amplitude){
        
        ctx.save();
        ctx.beginPath()
        ctx.lineWidth = 3;
        
        
        
        let x = 4.0, y= 0.0;
        let amp = amplitude;
        let freq = 30.0;
        //ctx.moveTo(x, y);
       
        while(x < canvasWidth){
            
            y = canvasHeight/2 + amp * Math.sin((x+stepNum)/freq);
            let hue = 225-(y *2);
            ctx.strokeStyle =`rgb(${225-hue}, ${3-hue}, ${136})`;
            ctx.lineTo(x,Math.floor(y));
            x= x +1;
            
        }
        ctx.stroke();
        ctx.restore();
    }

    //Draws the x and y axis on the canvas
    function drawAxis(ctx){
        ctx.save();
        ctx.lineWidth =2;
        ctx.strokeStyle = "white";
        ctx.moveTo(0, canvasHeight/2);
        ctx.lineTo(canvasWidth, canvasHeight/2);
        ctx.moveTo(canvasWidth/2, 0);
        ctx.lineTo(canvasWidth/2, canvasHeight);
        ctx.stroke();
        ctx.restore();
    } 

    window.talLIB ={drawAxis, drawSin};
})();
