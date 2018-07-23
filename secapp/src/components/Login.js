import React, { Component } from 'react';
import '../App.css';

const Login = (props) => {
  return (
    <div className="container" style={{display: 'flex',flex:1, flex: 'row' , justifyContent: 'space-between'}}>
      <form className="form-signin">
       <h2 className="form-signin-heading">  Sing in</h2>
       <label  className="sr-only">Password</label>
       <input type="text" id="inputEmail" className="form-control" placeholder="username" onChange={props.handleUser} required autoFocus />
       <label htmlFor="inputPassword" className="sr-only">Password</label>
       <input type="password" className="form-control" placeholder="Password" onChange={props.handlePassword} required/>
       <div className="checkbox">
         <label>
           <input type="checkbox" value="remember-me"/> Remember me
         </label>
       </div>
       <button className="btn btn-lg btn-primary btn-block"  onClick={props.flagChange}>Sign in</button>
     </form>
   </div>
  );
}




export default Login;
