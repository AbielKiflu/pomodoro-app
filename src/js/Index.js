import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Timmer from "./Timmer"
import Setting from "./Setting"
 




export default function Index(){

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

   

    return(
        <>
        <Timmer minutes={minutes} seconds={seconds} counter={time} start={timmer.work}/>
        <Setting/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 