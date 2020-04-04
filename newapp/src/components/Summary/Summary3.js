import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary3 = (props) => {
  return (
    <div className="Summary">
    <h1 className = 'AWSh'>Azure</h1>
  <p>This is a summary from about Azure.</p>

<nav className ='cnt'>
<h1 className = 'resourcetitle'>Resources</h1>
<ul className= "lglist">
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/virtual-machines/windows/overview')}>VM</a></li>
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview')}>Storage Account</a></li>
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview')}>Vnet</a></li>
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/application-gateway/overview')}>Application Gateway</a></li>
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview')}>Functions</a></li>
<li><a onClick={()=> window.open('https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-ops-guide-iam')}>IAM</a></li>


</ul>
</nav>
  </div>


)
}



export default Summary3;
