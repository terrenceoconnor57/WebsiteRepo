import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary4 = (props) => {
  return (
    <div className="Summary">
  <p>This is a summary from about Google.</p>

<nav className ='cnt'>
<ul className= "lglist">
  <li><a>EC2</a></li>
  <li><a>S3</a></li>
  <li><a>VPC</a></li>
  <li><a>ELB</a></li>
  <li><a>Lambda</a></li>
  <li><a>IAM</a></li>


</ul>
</nav>
  </div>


)
}



export default Summary4;
