import React from 'react';
import './Buttons.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';








const Buttons = (props) => {
  return (

<div className = 'buttn'>
<a className = "first" href = "/Summary/Summary2">AWS</a>
<a className = "second" href = "/Summary/Summary3">Azure</a>
<a className = "third" href = "/Summary/Summary4">Google</a>

</div>
)
}


export default Buttons;
