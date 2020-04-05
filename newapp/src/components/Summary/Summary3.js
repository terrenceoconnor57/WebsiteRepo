import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary3 = (props) => {
  return (
    <div className="Summary">
    <h1 className = 'AWSh'>Azure</h1>
    <p>Azure was initally launched in February 2010 as "Windows Azure". It was then
    renamed to "Microsoft Azure" in March of 2014. Azure currently holds 18% of the
    worldwide market share for cloud service providers.</p>
    <p>Many companies that are deciding to move their on-premise infrastructure to the cloud
    are already committed to a number of Microsoft products. Azure makes it very easy for these companies
    to migrate.</p>
    <p>As a holder of the Microsoft Azure Fundamentals certification, I can say that the Azure Platform
    has made it easy for enterprise businesses to setup or migrate their IT infrastructure onto the platform.
    One of my favorite things about the Azure platform is the hierarchical structure to navigate
    between resources, Active Directory groups, etc.</p>

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
