import React, { Component } from 'react';
import '../App.css';

class Hallo extends Component {


  render() {

		console.log(this.props)

    return (
      <div className="container" >
			{this.props.username}
    </div>
    );
  }
}

export default Hallo;
