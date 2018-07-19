import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login'


class App extends Component {

  state = {
    username: '',
    password: '',
    flag: false
  }
  
  flagChange = () => {
    this.setState({ flag: true })
  }

  render() {
    return (
      <Fragment>
        {!this.state.flag ? 
          <Login 
            flagChange={this.flagChange}
            username={this.state.username}
            password={this.state.password}
          /> 
          : 
          <h1>Dashboard</h1> 
        }
      </Fragment>
    );
  }
}

export default App;
