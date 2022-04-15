import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Time from "./Time"
import Setting from "./Setting"
 




export default function Index(){
    const [workTime,setWorkTime]=useState(120);
    const [breakTime,setBreakTime]=useState(60);
    const [start,setStart]=useState(true);
    const [state,setState]=useState(true);
 
function TimerSelector(){
    if(state>0){
        return <Time title="Work" state={state} setState={setState} time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
    }else{
        return <Time title="Break" state={state} setState={setState} time={breakTime} setTime={setBreakTime} start={start} setStart={setStart}/>
    }
}


    return(
        <>
         <TimerSelector/>
         <Setting state={state} time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 