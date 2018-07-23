import React, { Component , Fragment } from 'react';
import '../container/style.css';
import SideBar from '../side-bar/SideBar'
import TopBar from '../top-bar/TopBar'
import HomeModal from '../modal/HomeModal'
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
 


class Container extends Component {

  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  state = {
    modalIsOpen: false
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <Router>
      <div >
        <TopBar/>
        <SideBar openModal={this.openModal}/>
        <HomeModal 
           modalIsOpen={this.state.modalIsOpen}
           openModal={this.openModal}
           closeModal={this.closeModal} 
           afterOpenModal={this.afterOpenModal}
           />
        </div>
      
      </Router>
    );
  }
}

export default Container;
