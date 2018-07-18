import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MyComponent'
import MyComponent from './components/MyComponent'
import SecComponent from './components/SecComponent'


class App extends Component {

  constructor(){
    super()
  }
       state = {
        isLogged: false
      }

  loginSuccess = ()=>{
    this.setState({isLogged: true})
  }

  render() {
    return (
          <Fragment>
            { !this.state.isLogged ?   <MyComponent name="osyed" loginSuccess = {this.loginSuccess}/> :  <h1> Dashboard </h1> }
          </Fragment>
    );
  }
}

export default App;
