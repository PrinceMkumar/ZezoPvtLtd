import React from 'react'
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Transport_Trip_Start
(props) {

  async function handleLogout()
  {
    localStorage.clear();
    props.history.push('/');        
  }  

//    const [vehicleid, setVehicleid] = useState("");
   const [vehiclenumber, setVehiclenumber] = useState("");
   const [vehicletype, setVehicletype] = useState("");
   const [fromlocation, setFromlocation] = useState("");
   const [tolocation, setTolocation] = useState("");
   const [driver1name, setDriver1name] = useState("");
   const [driver2name, setDriver2name] = useState("");
   const [driver1phone, setDriver1phone] = useState("");
   const [driver2phone, setDriver2phone] = useState("");
   const [fare, setFare] = useState("");
   const [sceduleddate, setSceduleddate] = useState("");
//    const [scheduleddate, setScheduleddate] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/transporters/"+localStorage.getItem('userId')+"/vehicles",
        //  "+localStorage.getItem('username')+"
        {
            // vehicleid: vehicleid,
            
            vehiclenumber: vehiclenumber,
            vehicletype : vehicletype,
            fromlocation : fromlocation,
            tolocation :tolocation,
            driver1name: driver1name,
            driver2name: driver2name,
            driver1phone : driver1phone,
            driver2phone : driver2phone,
            fare : fare,
            sceduleddate : sceduleddate,
            // status : status,
        });
        
          alert("Data submitted Successfully");
          window.location.href="/TransporterLogin";
          setVehiclenumber("");
          setVehicletype("");
          setFromlocation("");
          setTolocation("");
          // setStatus("0");
          setDriver1name("");
          setDriver2name("");
          setDriver1phone("");
          setDriver2phone("");
          setFare("");
          setSceduleddate("");
        }
    catch(err)
        {
          alert("Data Registation Failed");
        }
   }

  

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <img src={require('./Images/a.png')} alt="Navbar" className="rounded offset-1" style={{height:'70px',width:'200px'}}/>
      <ul class="navbar-nav offset-3">
        <li class="nav-item">
          <a class="nav-link mt-1" href="/"><h5>Home</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" href="/TransporterLogin"><h5>Dashboard</h5></a>
        </li>
        <li class="nav-item dropdown">
        <h5><a class="nav-link dropdown-toggle mt-1" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Trips</a>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="/Transport_Trip_Start">Start a new trip</a>
            <a class="dropdown-item" href="/Transport_Trip_Active">Active Trips</a>
            <a class="dropdown-item" href="/Transport_Trip_Pending">Pending Trips</a>
            <a class="dropdown-item" href="/Transport_Trip_History">Trip History</a>
          </div></h5>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" href="/TransporterProfile"><h5>Profile</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" onClick={handleLogout} href="/"><h5>Logout</h5></a>
        </li>
        <form class="d-flex">
        <input class="form-control me-sm-2 mt-2 col-8" type="text" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-16" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </nav> 
  <br></br>
   
  <form class="container-fluid col-9 mx-auto" >
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputtext4">Vehicle Type</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Vehicle Type" onChange={(event) =>
                {
                    setVehicletype(event.target.value);      
                }} />
    </div>
    <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Vehicle Number</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Vehicle Number" onChange={(event) =>
                {
                    setVehiclenumber(event.target.value);      
                }} />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputtext4">Location From</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="From"onChange={(event) =>
                {
                    setFromlocation(event.target.value);      
                }} />
    </div>
    <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Location To</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="To"onChange={(event) =>
                {
                    setTolocation(event.target.value);      
                }} />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputtext4">Primary Driver</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Enter Name"onChange={(event) =>
                {
                    setDriver1name(event.target.value);      
                }} />
    </div>
    <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Phone Number</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Enter Number"onChange={(event) =>
                {
                    setDriver1phone(event.target.value);      
                }} />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputtext4">Secondary Driver</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Enter Name"onChange={(event) =>
                {
                    setDriver2name(event.target.value);      
                }} />
    </div>
    <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Phone Number</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Enter Number" onChange={(event) =>
                {
                    setDriver2phone(event.target.value);      
                }} />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Fare</label>
      <input type="text" class="form-control" id="inputCity" placeholder="Enter Fare" onChange={(event) =>
                {
                    setFare(event.target.value);      
                }} />
    </div>
    <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Schedule Date</label>
      <input type="text" class="form-control" id="sceduleddate" placeholder="DD/MM/YYYY HH:MM (24 HOUR)" onChange={(event) =>
                {
                  setSceduleddate(event.target.value);      
                }} />
    </div>
    {/* <div class="form-group col-md-4 offset-1">
      <label for="inputtext4">Scheduled Date</label>
      <input type="text" class="form-control" id="inputtext4" placeholder="Enter Date"onChange={(event) =>
                {
                    setScheduleddate(event.target.value);      
                }} />
    </div> */}
 
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

  <div class="global mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <h6>About Our Company</h6>
            <p><strong>Transport Buddy, a leading transport and logistics service provider is introducing a truly innovative, modern and high-tech online platform to book the truck in a few simple steps.
       With the apt use of advanced technology and rich industry experience, we are delivering customized and economical online transportation and cargo solutions to match your expectations and exceed industry benchmarks.</strong></p>
          </div>

          <div class="col-sm-6 col-md-2">

          </div>

          <div class="col-sm-6 col-md-2">
              <h6>Top Cities</h6>
              <ul>
                <li><a href="#">Pune</a> </li>
                <li><a href="#">Delhi</a> </li>
                <li><a href="#">Mumbai</a> </li>
                <li><a href="#">Bangalore</a> </li>
                <li><a href="#">Vadodra</a> </li>
                <li><a href="#">Chennai</a> </li>
              </ul>
          </div>

          <div class="col-sm-6 col-md-2">
              <h6>Logins</h6>
              <ul>
                <li><a href="#">Users</a> </li>
                <li><a href="#">Transporters</a> </li>
                <li><a href="#">Admin</a> </li>
              </ul>
          </div>

          <div class="social">
            <h6>Follow us</h6>
            <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i> </a>
            <a href="https://twitter.com/home"><i class="fa fa-twitter"></i> </a>
            <a href="https://ar.snap.com/ghost"><i class="fa fa-snapchat-ghost"></i> </a>
            <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i> </a>
            <a href="https://mail.google.com/mail"><i class="fa fa-google-plus"></i> </a>
          </div>

        </div>
        <p class="copyright"> &copy; Copyright Transport Buddy | All rights reserved</p>
      </div>
    </div>

</div> 
    
  )
}