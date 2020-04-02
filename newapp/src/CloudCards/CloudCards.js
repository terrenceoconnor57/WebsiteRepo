import React from 'react';
import './CloudCards.css'

const CloudCards = (props) => {
  return (
    <div className="CloudCards">

    <ul className = "Clouds">
    <li className = "list"><a className = 'Provs' href = 'https://www.amazon.com' >AWS</a></li>
    <li className = "list"><a className = 'Provs' href = 'https://www.amazon.com' >Azure</a></li>
    <li className = "list"><a className = 'Provs' href = 'https://www.amazon.com' >Google</a></li>
  </ul>

  </div>
)
}



export default CloudCards;
