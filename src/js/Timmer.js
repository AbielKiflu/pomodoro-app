import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';



export default function Timmer(){
    // update the timmer object with a setting
    const [timmer,setTimmer] =useState(
        {
            "work":1,
            "break":1,
            "start":false
        }
    );
    const [minutes,setMinutes] =useState(timmer.work);
    const [seconds,setSeconds] =useState(0);
    let [time,setTime] =useState((timmer.work * 60));
    let [breaktime,setBreakTime] =useState((timmer.break*60));

    function countdown(time,breaktime) {
       if(time >=0){
        let min=Math.floor(time/60);
        let sec=time%60;
        setMinutes(min);
        setSeconds(sec);
        time--;
        setTime(time);
       }else{
           if(breaktime>=0){
            let min=Math.floor(breaktime/60);
            let sec=breaktime%60;
            setMinutes(min);
            setSeconds(sec);
            breaktime--;
           setBreakTime(breaktime);
           }
       }
    }

     
    useEffect(() =>{
        const interval=setInterval(() =>{
            clearInterval(interval);
            countdown(time,breaktime);
        },1000);
    },[time,breaktime]);

    let timeMinutes=minutes<10?"0"+minutes:minutes;
    let timeSeconds=seconds<10?"0"+seconds:seconds;
       
 

    return(
        <>
        <div className="circle">
            <span className="timmer"> {timeMinutes}:{timeSeconds}</span>
            <svg>
                <circle cx="100" cy="100" r="70" />
                <circle cx="100" cy="100" r="70" />
            </svg>
        </div>
        </>
    );
}

 