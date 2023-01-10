import React from 'react'
import axios from "axios";
import { useState } from "react";
// import {useForm} from "react-hook-form";



export default function RegistrationFormUsers() {

   
  //  const onSubmit1 = (data) =>{
  //    setUserInfo(data);
  //  }

  //  const{regsiter, handleSubmit1, errors} = useForm();
  //  const[userInfo, setUserInfo] = useState();

   const [userid, setUserId] = useState("");
   const [username, setUsername] = useState("");
   
   const [password, setPassword] = useState("");
   const [useremail, setUseremail] = useState("");
   const [phone, setPhone] = useState("");
   const [fulladdress, setFulladdress] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/users",
        {
        userid: userid,
        username: username,
        
        password : password,
        useremail : useremail,
        phone : phone,
        fulladdress :fulladdress
        });
        
          alert("User Registation Successfully");
          window.location.href="/"
          setUserId(0);
          setUsername("");
          
          setPassword("");
          setUseremail("");
          setPhone("");
          setFulladdress("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

  return (
     <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <img src={require('./Images/a.png')} alt="Navbar" className="rounded offset-1" style={{height:'70px',width:'200px'}}/>
      <ul class="navbar-nav offset-4">
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

    <div class='container-fluid col-12 mt-3'><h3>Registration Form Users</h3>

    <form class="col-4" onSubmit={handleSubmit}>
  <fieldset>
    <div class="form-group">
      <label for="exampleUserName" class="form-label mt-4">User Name</label>
      <input type="text" name="username"  class="form-control" id="exampleUserName" placeholder="Enter Name"  
      onChange={(event) =>
                {
                  setUsername(event.target.value);      
                }}/>
    </div>
    {/* <p>{errors.username?.message}</p> */}
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" name="useremail"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
      onChange={(event) =>
                {
                    setUseremail(event.target.value);      
                }}/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" name="userpassword"  class="form-control" id="exampleInputPassword1" placeholder="Password" 
      onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }} />
    </div>
    <div class="form-group">
      <label for="examplePhone" class="form-label mt-4">Phone Number</label>
      <input type="phone" name="phone" class="form-control" id="examplePhone" placeholder="Enter Number" onChange={(event) =>
                {
                    setPhone(event.target.value);      
                }} />
    </div>
    <div class="form-group">
      <label for="exampleAddress" class="form-label mt-4">Address</label>
      <input type="address" name="fulladdress" class="form-control" id="examplePhone" placeholder="Enter Address" onChange={(event) =>
                {
                    setFulladdress(event.target.value);      
                }} />
    </div>
    <button type="submit" class="btn btn-primary mt-4">Submit</button>
  </fieldset>
</form>
    </div></>
  )
}