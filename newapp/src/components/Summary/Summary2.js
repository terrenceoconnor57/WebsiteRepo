import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary2 = (props) => {
  return (
    <div className="Summary">

    <h1 className = 'AWSh'>Amazon Web Services</h1>
  <p>This is a summary from about AWS.</p>

<nav className ='cnt'>
<h1 className = 'resourcetitle'>Resources</h1>
<ul className= "lglist">
  <li><a onClick={()=> window.open('https://aws.amazon.com/ec2/faqs/')}>EC2</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/s3/faqs/')}>S3</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/vpc/faqs/')}>VPC</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/ebs/faqs/')}>EBS</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/cloudfront/faqs/')}>CloudFront</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/lambda/faqs/')}>Lambda</a></li>
  <li><a onClick={()=> window.open('https://aws.amazon.com/iam/faqs/')}>IAM</a></li>


</ul>
</nav>
  </div>


)
}



export default Summary2;
