import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MyComponent'
import MyComponent from './components/MyComponent';
import SecComponent from './components/SecComponent';


class App extends Component {

  render() {
    return (

             <MyComponent name="osyed"/>
       
    );
  }
}

export default App;
