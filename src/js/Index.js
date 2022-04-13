import React from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Timmer from "./Timmer"




export default function Index(){

    return(
        <>
        <Timmer/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 