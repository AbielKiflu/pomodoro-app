import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Time from "./Time"
import Setting from "./Setting"
 




export default function Index(){
    const [workTime,setWorkTime]=useState(120);
    const [breakTime,setBreakTime]=useState(60);
    const [start,setStart]=useState(true);
     
 
function TimerSelector(){
    if(workTime>0){
        return <Time title="Work" time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
    }else{
        return <Time title="Break"  time={breakTime} setTime={setBreakTime} start={start} setStart={setStart}/>
    }
}


    return(
        <>
         <TimerSelector/>
         <Setting time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 