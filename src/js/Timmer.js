import React from "react";


export default function Timmer({minutes,seconds,counter,start}){

    let timeMinutes=minutes<10?"0"+minutes:minutes;
    let timeSeconds=seconds<10?"0"+seconds:seconds;
    
    function progressBar(counter,start){
        let progress=0;
        start=start*60;
        if(counter>0)
            progress=440 - ( 440 * counter )/start;
            return {strokeDashoffset:progress};
    }
 
    //console.log(progressBar(counter));
    

    return(
        <>
        <div className="circle">
            <span className="timmer"> {timeMinutes}:{timeSeconds}</span>
            <svg className="svg">
                <circle className="svg__inner" cx="100" cy="100" r="70" />
                <circle  className="svg__outer" style={progressBar(counter,start)} cx="100" cy="100" r="70" />
            </svg>
        </div>
        </>
    );
}

 