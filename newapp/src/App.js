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
        <ul className = "menu">
          <li><a className = 'menufont' href = "https://www.google.com">Home</a></li>
          <li><a className = 'menufont' href = "/">Blog</a></li>
          <li><a className = 'menufont' href = "/">About</a></li>
          <li><a className = 'menufont' href = "/">Contact</a></li>
        </ul>
      </nav>
    </header>

    <h1>CloudWhich.com</h1>
    <h2>Which cloud is for you?</h2>
    <Summary me= "Hey"/>
    <br/>
    <br/>
    <h2 className = 'Providers'>Choose a provider</h2>

    <CloudCards/>


    </div>




  );

}
}

export default App;
