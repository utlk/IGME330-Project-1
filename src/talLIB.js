
(function()  {
    "use strict";
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
   
    //Draws a sinWave
    function drawSin(ctx, stepNum, amplitude, freqV, gradientDir){
        
        ctx.save();
        ctx.beginPath()
        ctx.lineWidth = 3;
        
        let x = 4.0, y= 0.0;
        let amp = amplitude;
        let freq = freqV;
        let gradient;
        //gradientDir referse to which direction the linear gradient of the graph goes.
       console.log(gradientDir);
        while(x < canvasWidth){
            //uses gradient dir to decide which direction the gradient goes in. 
            //If GradientDir is true, the gradient is vertical
            //If gradientDir is false, it will display horizontally.
            if(gradientDir){gradient= ctx.createLinearGradient(0, canvasHeight, 0, 0);}
            else{gradient= ctx.createLinearGradient(4, 0, x, y);}
            
            gradient.addColorStop(0,`rgb(0, 0, 153)`);
            gradient.addColorStop(.5, `rgb(76, 0, 153)`);
            gradient.addColorStop(1, `rgb(255, 0, 127)`);
            y = canvasHeight/2 + amp * Math.sin((x+stepNum)/freq);
            let hue = 225-(y *2);
            ctx.strokeStyle =gradient; //`rgb(${225-hue}, ${3-hue}, ${136})`;
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
