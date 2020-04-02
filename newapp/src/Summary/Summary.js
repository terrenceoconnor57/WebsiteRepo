import React from 'react';
import './Summary.css'

const Summary = (props) => {
  return (
    <div className="Summary">
    <nav>
  <p>This is a {props.me} from the 2nd component.
  Explore more than 60 products and start building on AWS using the free tier.
  Three different types re available depending on the product used.
  See below for details on each product.</p>
  </nav>
  </div>
)
}



export default Summary;
