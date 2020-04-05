import React from 'react';
import './Summary.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
const Summary2 = (props) => {
  return (
    <div className="Summary">

    <h1 className = 'AWSh'>Amazon</h1>
  <p>In 2006, AWS started to offer their Infrastructure as a Service platform
  to many businesses around the world. This quickly became known as Cloud computing.</p>
  <p>Whether its hosting a static website, having globally redundant storage, or spinning up thousands of
  servers for your business application, AWS is the platform for you.</p>
  <p>As a holder of the AWS Certified Solutions Architect Certification, I can vouch for all of the
  hype that surrounds AWS services. One of my favorite things about the AWS platform is the ease of navigating
  and creating through the console. AWS makes it very easy to quickly spin up resources while ensuring that
  they are secure.</p>

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
