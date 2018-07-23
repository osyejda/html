import React, { Component , Fragment } from 'react';
import '../container/style.css';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
import About from '../contents/About';
import Home from '../contents/Home';

export default class componentName extends Component {

  //  Topics = ({ match }) => (
  //     <h2>Topics</h2>
  // );
  render() {
    return (
      <div className="wrapper ">
          <nav id="sidebar">
              <div className="sidebar-header">
                  <h3>MENU </h3>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
          
              </ul>
          </nav>

      <Route exact path="/" render={(props) => <Home {...props} openModal={this.props.openModal} />} />
    <Route  path="/about" render={(props) => <About {...props} openModal={this.props.openModal} />} />
      </div>
    )
  }
}
 