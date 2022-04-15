import React from 'react';

 export default function Setting({counter,setCounter,time,setTime,start,setStart}) {
 

  const increment=()=>{
    setStart(false);
    let initial=time;
    initial=initial + 60 ;
    setTime(initial);
    //setCounter(initial);
  }

  const decrement=()=>{
  setStart(false);
    let initial=time;
    if (initial>0)
    initial=initial - 60 ;
    setTime(initial);
    //setCounter(initial);
  }

  const toggle=()=>{
    let toggle=start;
    toggle = !toggle;
    setCounter(time);
    setStart(toggle);
    
  }

  return (
    <>
     
        <div className="setting">
        <button className="btn" onClick={increment} >+</button>
        <button className="btn" onClick={decrement} >-</button>
        <input type="checkbox" id="toggle" checked={start} onChange={toggle} ></input>
        <label htmlFor="toggle"></label>
        </div>
       
    </>
  );
}

