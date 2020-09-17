var context;
var ctx1;
(function (){
    "use strict"
     let amplitude, ampLabel, ampValue;
     let frequency;
     let graphNum;
    window.onload = init;
    let step = 4;

    function init(){
        context = canvas.getContext("2d"); 
        context.fillRect(0,0, 800, 160); //context is for the background
        ctx1 = canvas2.getContext("2d");//ctx1 contains the sin wave
        talLIB.drawAxis(context);
        amplitude = document.querySelector("#amplitude");
        
        ampLabel = document.querySelector("#ampLabel");
        ampLabel.innerHTML = `Amplitude ${amplitude.value}`;
        ampValue = amplitude.value;
        onRangeChange(amplitude,changeAmp);
        
        draw();
    };
    
    //Function makes sliders properly function. Taken from Stackoverflow
    function onRangeChange(r,f) {
        var n,c,m;
        r.addEventListener("input",function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
        r.addEventListener("change",function(e){if(!n)f(e);});
      }

    function draw(){
        requestAnimationFrame(draw);
        ctx1.clearRect(0,0, 800, 160);
        talLIB.drawSin(ctx1, step, ampValue);
        step+=4;
    }


  

    function changeAmp(){
        ampLabel.innerHTML = `Amplitude ${amplitude.value}`;
        ampValue = amplitude.value;
    }
})();
