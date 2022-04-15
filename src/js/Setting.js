import React from 'react';

 export default function Setting({time,setTime,start,setStart}) {
 

  const increment=()=>{
    let initial=time;
    initial=initial + 60 ;
    setTime(initial);
  }

  const decrement=()=>{
    let initial=time;
    if (initial>0)
    initial=initial - 60 ;
    setTime(initial);
  }

  const toggle=()=>{
    let toggle=start;
    toggle = !toggle;
    setTime(120);
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

