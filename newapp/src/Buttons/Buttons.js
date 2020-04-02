import React from 'react';
import './Buttons.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';








const Buttons = (props) => {
  return (

<div>
<button className = "first" onClick={()=> window.open('https://aws.amazon.com/')}>AWS</button>
<button className = "second" onClick={()=> window.open('https://azure.microsoft.com/en-us/')}>Azure</button>
<button className = "third" onClick={()=> window.open('https://cloud.google.com/')}>Google</button>

</div>
)
}


export default Buttons;
