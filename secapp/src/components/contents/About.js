
import React, { Component , Fragment } from 'react';

const About = (props) => {
  return(
  <div className="container"  style={{textAlign: 'center'}} >
    <button onClick={props.openModal}>About </button>
  </div>
  )
}

export default About;