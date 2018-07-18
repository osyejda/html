import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class MyComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: 1
    }
  }
  handle = (event)=>{
    event.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // 
  }
  
  handleChangeTitle = (event) => {
    this.setState({title: event.target.value})
  }
  handleChangeBody = (event) => {
    this.setState({body: event.target.value})
  }
  render() {
    console.log(this.state)
    return (
      <div className="container" style={{display: 'flex',flex:1, flex: 'row' , justifyContent: 'space-between'}}>
       <form className="form-signin">
        <h2 className="form-signin-heading">Post a post</h2>
        <label  className="sr-only">Title</label>
        <input type="text" id="inputEmail"  value = {this.state.title} onChange={this.handleChangeTitle} className="form-control" placeholder="Title" required autoFocus/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="text"  onChange={this.handleChangeBody}  value = {this.state.body}  className="form-control" placeholder="Body" required/>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block"  onClick={this.handle}>Sign in</button>
      </form>
    </div>
    );
  }
}

export default MyComponent;
