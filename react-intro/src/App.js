import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from "./Comp";

class App extends Component {
  render() {
      var clue = "Blue's Clues";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Comp clue={clue}/>
        </p>
      </div>
    );
  }
}

export default App;
