import React from 'react';
import './Buttons.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';








const Buttons = (props) => {
  return (

<div className = 'buttn'>
<a className = "first" href = "/">AWS</a>
<a className = "second" href = "/Button">Azure</a>
<a className = "third" href = "/Button">Google</a>

</div>
)
}


export default Buttons;
