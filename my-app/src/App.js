import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MyComponent'
import MyComponent from './components/MyComponent'
import SecComponent from './components/SecComponent'
import Dashboard from './components/Dashborad'


class App extends Component {
  
    state = {
    isLogged: false
  }

  loginSuccess = ()=>{
    this.setState({isLogged: true})
  }

  render() {
    return (
          <Fragment>
            { !this.state.isLogged ?   <MyComponent name="osyed" loginSuccess = {this.loginSuccess}/> :      
             <Dashboard/>
      }
          </Fragment>
    );
  }
}

export default App;
