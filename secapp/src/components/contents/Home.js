
import React, { Component , Fragment } from 'react';

const Home = (props) => {
  return(
  <div className="container" style={{textAlign: 'center',backgroundColor: 'red'}}>
    <button onClick={props.openModal}>Home </button>
  </div>
  )
}

export default Home;