import React from 'react'
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function UserLogin
() {

  // const [requestid, setRequestid] = useState('');
  const [userid, setUserId] = useState('');
  const [status, setStatus] = useState('');
  // const [vehicleid, setVehicleid] = useState('');
  // const [status, setStatus] = useState('');

  const[vehicles, setVehicles] = useState([]);
  useEffect(()=>
  {
    handleClick();
  },[])

  async function handleClick()
  {
    const result = await axios.get(
      "http://localhost:8080/api/vehicles/allpending");
      setVehicles(result.data);
      console.log(result.data);
  }  

  async function changeStatus(e, vehicleid)
    {   
        // event.preventDefault();
        const userid =  setUserId(localStorage.getItem('userId'));
        // const Status = setStatus(1)
        const Vehicle = {vehicleid}
        // alert(JSON.stringify(Vehicle))
    try
        {
         await axios.post("http://localhost:8080/api/users/"+localStorage.getItem('userId')+"/requests", Vehicle
        );

        
        // await axios.put("http://localhost:8080/api/vehicle_l/"+JSON.stringify(vehicleid), { params: { "status" : "1"} }
        // );
          alert("Request Sent Successfully");
          window.location.href="/UserLogin"
          // setRequestid(0);
          
          // setVehicleid("");
          // setStatus(1);
        
        }
    catch(err)
        {
          alert("Request Failed");
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
          <a class="nav-link mt-1" href="/UserLogin"><h5>Dashboard</h5></a>
        </li>
        <li class="nav-item dropdown">
        <h5><a class="nav-link dropdown-toggle mt-1" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Orders</a>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="/User_Order_Pending">Requested Trips</a>
            <a class="dropdown-item" href="/User_Order_Active">Active Trips</a>
            <a class="dropdown-item" href="/User_Order_History">Trip History</a>
          </div></h5>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" href="/UserProfile"><h5>Profile</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" href="/"><h5>Logout</h5></a>
        </li>
        <form class="d-flex">
        <input class="form-control me-sm-2 mt-2 col-7" type="text" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-16" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </nav> 
  
          
   <br></br>
  <div class="media">
         
         <div class="media-body">
          <p class='mt-0'>
          <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Vehicle Type</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">From Location</th>
      <th scope="col">To Location</th>
      {/* <th scope="col">Primary Driver</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Secondary Driver</th>
      <th scope="col">Phone Number</th> */}
      <th scope="col">Fare</th>
      <th scope="col">Vehicle Id</th>
    </tr>
    </thead>
    {vehicles.map(function fn(item)
    {
      return(
        <tbody>
      <tr class="table-active">
        <th scope="row">{item.vehicletype}</th>
        <td>{item.vehiclenumber}</td>
        <td>{item.fromlocation}</td>
        <td>{item.tolocation}</td>
        {/* <td>{item.driver1name}</td>
        <td>{item.driver1phone}</td>
        <td>{item.driver2name}</td>
        <td>{item.driver2phone}</td> */}
        <td>{item.fare}</td>
        <td>{item.vehicleid}</td>
        <td>
        <button onClick={ e => {changeStatus (e, item.vehicleid)} } type="button" class="btn btn-info">Book</button></td>
      </tr>
      
    </tbody>

    );
    })

    }
    </table>
      
          </p>
         </div>
  </div>

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

// render(<Example />);