var context;
var ctx1;
(function (){
    "use strict"
     let amplitude, ampLabel, ampValue;
     let frequency, freqLabel, freqValue;
     let gradVal, xButton, yButton;
    window.onload = init;
    let step = 4;

    function init(){
        context = canvas.getContext("2d"); 
        context.fillRect(0,0, 800, 160); //context is for the background
        ctx1 = canvas2.getContext("2d");//ctx1 contains the sin wave
        talLIB.drawAxis(context);
        amplitude = document.querySelector("#amplitude");
        frequency = document.querySelector("#freq")
        
        //Gets controls for the Amplitude slider
        ampLabel = document.querySelector("#ampLabel");
        ampLabel.innerHTML = `Amplitude: ${amplitude.value}`;
        ampValue = amplitude.value;
        onRangeChange(amplitude,changeAmp);
        
        //Gets controls for the frequency slider;
        freqLabel = document.querySelector("#freqLabel");
        freqLabel.innerHTML = `Frequency: ${frequency.value}`;
        freqValue = frequency.value;
        onRangeChange(frequency, changeFreq)
        
        //Gets controls for the gradient direction
        xButton = document.querySelector("#xB");
        yButton = document.querySelector("#yB");
        xButton.onclick = changeGradientDir;
        yButton.onclick = changeGradientDir;
        changeGradientDir();
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
        talLIB.drawSin(ctx1, step, ampValue, freqValue, gradVal);
        step+=4;
    }

    //Handles changing the frequency of the wave
    function changeFreq()
    {
        freqLabel.innerHTML = `Frequency: ${frequency.value}`;
        freqValue = frequency.value;
    }

    //Handles changing the amplitude of the wave
    function changeAmp(){
        ampLabel.innerHTML = `Amplitude ${amplitude.value}`;
        ampValue = amplitude.value;
    }

    //handles changing the direction of the gradient.
    function changeGradientDir()
    {
        if(xButton.checked){gradVal = 0;}
        else{gradVal = 1;}
    
    }
})();
