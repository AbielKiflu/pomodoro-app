import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Time from "./Time"
import Setting from "./Setting"
 




export default function Index(){
    const [workTime,setWorkTime]=useState(120);
    const [breakTime,setBreakTime]=useState(60);
    const [start,setStart]=useState(true);
     

    return(
        <>
        <Time time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
         <Setting time={workTime} setTime={setWorkTime} start={start} setStart={setStart}/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 