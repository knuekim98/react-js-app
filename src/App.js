import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '20px'
    };

    return (
      <div style={style}>
        hello react
      </div>
    );
  }
}

export default App;
