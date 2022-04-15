import React,{useEffect} from "react";


export default function Time({title,state,setState,time,setTime,start,counter,setCounter}){

   
  useEffect(()=>{
        const interval=setInterval(() =>{
            clearInterval(interval);
             if(start){
                let initialCounter=counter;
                if(initialCounter >0){
                    initialCounter--;
                    setCounter(initialCounter);
                }else{
                    setState(!state);
                }
             }else{
                 //timmer reset
             }
        },1000);
    },[counter]);

 

    


     function progressBar(counter,time){
        let progress=0;
        if(counter>0)
            progress=440 - ( 440 * counter )/time;
            return {strokeDashoffset:progress};
    }


    let min=Math.floor(counter/60);
    let sec=counter%60;
 
    return(
        <>
        <h2>{title}</h2>
        <div className="circle">
            <span className="timmer">{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</span>
            <svg className="svg">
                <circle  className="svg__inner" cx="100" cy="100" r="70" />
                <circle  className="svg__outer" style={progressBar(counter,time)}
                  cx="100" cy="100" r="70" />
            </svg>
        </div>
        </>
    );
}

 