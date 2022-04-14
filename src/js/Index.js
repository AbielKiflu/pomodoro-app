import React from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import Timmer from "./Timmer"
import Setting from "./Setting"




export default function Index(){

    return(
        <>
        <Timmer/>
        <Setting/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);
 