import React,{useState,useEffect} from 'react';

 export default function Setting({toggle,switcher,added,reduced}) {

   function toggleChanged(){
    switcher();
   }

   function addClicked(){
     //added();
    console.log('addClicked');
   }

   function minusClicked(){
     reduced();
   }

  return (
    <>
        <div className="setting">
        <button className="btn" onClick={addClicked}>+</button>
        <button className="btn" onClick={minusClicked}>-</button>
        <input type="checkbox" id="toggle" onChange={toggleChanged} checked={toggle}></input>
        <label htmlFor="toggle"></label>
        </div>
       
    </>
  );
}

