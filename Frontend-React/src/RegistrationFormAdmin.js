import React from 'react'
import AuthServiceAdmin from './service/AuthServiceAdmin';
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

function RegistrationFormAdmin(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  

  useEffect(() => { localStorage.clear() }, []);

 const alogin = (e) => {
      e.preventDefault();
      const credentials = {username: username, password: password};
      AuthServiceAdmin.alogin(credentials).then(res => {
        localStorage.setItem('token', res.data.token);
         props.history.push('/AdminLogin');
          
      });
  };


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <img src={require('./Images/a.png')} alt="Navbar" className="rounded offset-1" style={{height:'70px',width:'200px'}}/>
      <ul class="navbar-nav offset-5">
        <li class="nav-item">
          <a class="nav-link" href="/"><h4>Home</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="FAQ"><h4>Truck Type</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="truck"><h4>FAQ</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/about'><h4>About</h4></a> 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact"><h4>Contact</h4></a>
        </li>
      </ul>
    </div>
  </nav> 
  <br></br>
      <div class="form-group mx-auto col-5">
    <label class="form-label mt-4"><h4>Admin</h4></label>
    <div class="form-floating mb-3">
      <input type="email"  onChange={(e)=> setUsername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com"></input>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" onChange={(e)=> setPassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password"></input>
      <label for="floatingPassword">Password</label>
    </div>
    <br></br>
    <button type="button" onClick={alogin}class="btn btn-primary">Login</button>
  </div>
  
  </div>
  )
}

export default RegistrationFormAdmin