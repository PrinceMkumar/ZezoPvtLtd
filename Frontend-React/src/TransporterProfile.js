import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function TransporterProfile
(props) {

  const[vehicles, setVehicles] = useState([]);
  useEffect(()=>
  {
    handleClick();
  },[])

  async function handleLogout()
  {
    localStorage.clear();
    props.history.push('/');        
  }         
  
  async function handleProfileEdit()
  {
    // localStorage.clear();
    props.history.push('TransporterProfile_Edit');        
  }      
                                    
  async function handleClick()
  {
    const result = await axios.get('http://localhost:8080/api/transporter', { params: { username: localStorage.getItem('username') } });

      setVehicles(result.data);
      console.log(result.data);
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
  
          

  <div class="media">
         <img src={require('./Images/c.png')}  style={{height:'564px',width:'700px'}}/> 
         <div class="media-body" style={{backgroundColor:'lightgrey', border:'1px dashed blue', height:'564px'}}>
          <p class='mt-0 col-9 mx-auto' >
          {/* <table class="table table-hover"> */}
    {/* <thead> */}
    {/* <tr>
      <th scope="col">Truck Type</th>
      <th scope="col">Driver1</th>
      <th scope="col">Phone1</th>
      <th scope="col">Driver2</th>
      <th scope="col">Phone2</th>
      
    </tr> */}
    {/* </thead> */}
    <br></br>
    {vehicles.map(function fin(props)
    {
      return(
        <div className="col-12">
         <img src={require('./Images/u.png')} alt="Navbar" className="rounded offset-1" style={{height:'250px',width:'300px'}}/>  
         <br></br> <button type="button" onClick={handleProfileEdit} href="/TransporterProfile_Edit" class="btn btn-outline-dark d-block offset-9">Edit</button> <br></br>
      <tr class="table-active mt-5">
        {/* <h5><span className="col-4"><strong>Transporter Id :</strong></span><span>{props.userId}</span></h5><br></br> */}
        <h5><span className="col-4 "><strong>Transporter Name :</strong></span><span>{props.username}</span></h5><br></br>
        <h5><span className="col-4"><strong>Transporter Email :</strong></span><span>{props.email}</span></h5><br></br>
        <h5><span className="col-4"><strong>Phone Number :</strong></span><span>{parseInt(props.phone)}</span></h5><br></br>
        <h5><span className="col-4"><strong>Transport Company :</strong></span><span>{props.transportername}</span></h5>
        
      </tr>
      
    </div>

    );
    })

    }
    {/* </table> */}
      
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