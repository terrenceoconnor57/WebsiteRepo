import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Summary from './components/Summary/Summary';
import Summary2 from './components/Summary/Summary2';
import Summary3 from './components/Summary/Summary3';
import Summary4 from './components/Summary/Summary4';
import Buttons from './components/Buttons/Buttons';
import ButtonOne from './components/ButtonOne/ButtonOne';


class App extends Component {
  state = {
    visible: true
  };




  //clickHandle = () => {
  //display('none');
  //}


  render(){
    const style = {
      padding: '20px'
    }

    const buttonText = this.state.visible ? "hide": "show";

  return (
    <BrowserRouter>
    <div className="App">

    <header>
      <nav>
        <ul className = "menu">
          <li className = 'mainmenu'><a className = 'menufont' href = "/ButtonOne">Home</a></li>
          <li className = 'mainmenu'><a className = 'menufont' href = "/Summary">About</a></li>
          <li className = 'mainmenu'><a  className = 'menufont' href = "/Buttons">Clouds</a></li>
          <li className = 'mainmenu'><a className = 'menufont' href = "https://github.com/terrenceoconnor57/WebsiteRepo">GitHub</a></li>
        </ul>
      </nav>
    </header>

    <h1 className = "title">CloudWhich.com</h1>
        <h2>Which cloud is for you?</h2>

    <br/>
    <br/>
    <nav className = 'nav'>
    <Route path = "/Summary" exact component={Summary} />
    <Route path = "/Summary/Summary2" exact component={Summary2} />
    <Route path = "/Summary/Summary3" exact component={Summary3} />
    <Route path = "/Summary/Summary4" exact component={Summary4} />
</nav>


    </div>
    <Route path = "/Buttons" exact component={Buttons} />

    <Route path = "/ButtonOne" exact component={ButtonOne} />

</BrowserRouter>



  );

}
}

export default App;
