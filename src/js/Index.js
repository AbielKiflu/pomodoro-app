import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Time from "./Time"
import Setting from "./Setting"
 




export default function Index(){
    const [workTime,setWorkTime]=useState(120);
    const [breakTime,setBreakTime]=useState(60);
    const [counter,setCounter]=useState(0);
    const [start,setStart]=useState(false);
    const [state,setState]=useState(true);
 

function TimerSelector(){
    if(state){
        return <Time title="Work" counter={counter} setCounter={setCounter} state={state} setState={setState} time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
    }else{
        return <Time title="Break" counter={counter} setCounter={setCounter} state={state} setState={setState} time={breakTime} setTime={setBreakTime} start={start} setStart={setStart}/>
    }
}


    return(
        <>
         <TimerSelector/>
         <Setting state={state} counter={counter} setCounter={setCounter} time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 