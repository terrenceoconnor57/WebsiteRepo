import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Card from './Card/Card';
import Summary from './Summary/Summary';
import CloudCards from './CloudCards/CloudCards';

class App extends Component {
  render(){
    const style = {
      padding: '20px'
    }

  return (
    <div className="App">

    <header>
      <nav>
        <ul>
          <li><a href = "https://www.google.com">Home</a></li>
          <li><a href = "/">Blog</a></li>
          <li><a href = "/">About</a></li>
          <li><a href = "/">Contact</a></li>
        </ul>
      </nav>
    </header>

    <h1>CloudWhich.com</h1>
    <h2>Your source for cloud updates.</h2>
    <Summary me= "Hey"/>
    <br/>
    <h2 className = 'Providers'>Top Cloud Providers</h2>
    <CloudCards/>


    </div>




  );

}
}

export default App;
