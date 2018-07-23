import React, { Component , Fragment } from 'react';
import './App.css';
// import axios from 'axios';
import Login from './components/Login'
import Hallo from './components/Hallo'
import Container from './components/container/Container'
class App extends Component {

  state = {
    username: '',
    password: '',
    flag: false
  }
  

  userName = (username) => {
    this.setState({ username: this.userName });
  }
  flagChange = () => {
    this.setState({ flag: true })
  }
  handleUser = (e) => {
    this.setState({username: e.target.value})
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }
  outP = () => {
       return <h5>dasfdfadafsfads</h5>
  }
  
  

  render() {
    return (
      <div>
       {/*  {!this.state.flag ? 
          <Login 
            flagChange={this.flagChange}
            handleUser = {this.handleUser}
            handlePassword = {this.handlePassword}
          /> 
          : 
          //<h1>{Dashboard {this.state.username} {this.state.password}}</h1> 
          <Hallo
            username= {this.state.username}
          />
      } */}
        <Container/>
      </div>
    );
  }
}

export default App;
