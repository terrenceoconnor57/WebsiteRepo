import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Card from './Card/Card';
import Summary from './Summary/Summary';
import CloudCards from './CloudCards/CloudCards';
import Buttons from './Buttons/Buttons';
import ButtonOne from './ButtonOne/ButtonOne';
import Home from './Home/Home'

class App extends Component {
  render(){
    const style = {
      padding: '20px'
    }

  return (
    <BrowserRouter>
    <div className="App">

    <header>
      <nav>
        <ul className = "menu">
          <li className = 'mainmenu'><a className = 'menufont' href = "/Button">Home</a></li>
          <li className = 'mainmenu'><a className = 'menufont' href = "/">Blog</a></li>
          <li className = 'mainmenu'><a className = 'menufont' href = "/">About</a></li>
          <li className = 'mainmenu'><a className = 'menufont' href = "/">Contact</a></li>
        </ul>
      </nav>
    </header>

    <h1>CloudWhich.com</h1>
        <h2>Which cloud is for you?</h2>

    <br/>
    <br/>
<ButtonOne/>




    </div>
    <Route path = "/Button" exact component={Buttons} />
</BrowserRouter>



  );

}
}

export default App;
