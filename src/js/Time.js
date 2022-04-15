import React,{useEffect,useState} from "react";


export default function Time({time,setTime,start}){
const [startTime,setStartTime]=useState(time);

    useEffect(()=>{
        const interval=setInterval(() =>{
            clearInterval(interval);
             if(start){
                let initialCounter=time;
                if(initialCounter >0){
                    initialCounter--;
                    setTime(initialCounter);
                }
             }else{
                 //timmer reset
             }
        },1000);
    },[time]);

 

    


     function progressBar(time){
        let progress=0;
        if(time>0)
            progress=440 - ( 440 * time )/startTime;
            return {strokeDashoffset:progress};
    }


    let min=Math.floor(time/60);
    let sec=time%60;
 
    return(
        <>
        <div className="circle">
            <span className="timmer">{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</span>
            <svg className="svg">
                <circle  className="svg__inner" cx="100" cy="100" r="70" />
                <circle  className="svg__outer" style={progressBar(time)}
                  cx="100" cy="100" r="70" />
            </svg>
        </div>
        </>
    );
}

 