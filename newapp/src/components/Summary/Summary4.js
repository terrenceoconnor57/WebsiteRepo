import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary4 = (props) => {
  return (
    <div className="Summary">
    <h1 className = 'AWSh'>Google Cloud</h1>
  <p>This is a summary from about Google.</p>

<nav className ='cnt'>
<h1 className = 'resourcetitle'>Resources</h1>
<ul className= "lglist">
  <li><a onClick={()=> window.open('https://cloud.google.com/compute/docs')}>Compute Engine</a></li>
  <li><a onClick={()=> window.open('https://cloud.google.com/storage/docs')}>Cloud Storage</a></li>
  <li><a onClick={()=> window.open('https://cloud.google.com/vpc/docs/vpc')}>VPC</a></li>
  <li><a onClick={()=> window.open('https://cloud.google.com/load-balancing/docs')}>Load Balancer</a></li>
  <li><a onClick={()=> window.open('https://cloud.google.com/functions/docs')}>Cloud Functions</a></li>
  <li><a onClick={()=> window.open('https://cloud.google.com/iam/docs')}>IAM</a></li>


</ul>
</nav>
  </div>


)
}



export default Summary4;
