import React from 'react'
import { useHistory } from "react-router-dom";


export default function AdminLogin(props) {

  async function handleLogout()
  {
    localStorage.clear();
    props.history.push('/');        
  }                                 


    const history = useHistory();
  
    const Register = () => {
        history.push("/Admin_Users")
      };

      const Admin_Order_Completed = () => {
        history.push("/Admin_Completed")
      };
    
      const Register1 = () => {
        history.push("/Admin_Transporters")
      };

      const Register2 = () => {
        history.push("/Admin_Requests")
      };

      const Register3 = () => {
        history.push("/Admin_Active")
      };

  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <img src={require('./Images/a.png')} alt="Navbar" className="rounded offset-1" style={{height:'70px',width:'200px'}}/>
      <ul class="navbar-nav offset-4">
        <li class="nav-item">
          <a class="nav-link mt-1" href="/"><h5>Home</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1" href="/AdminLogin"><h5>Dashboard</h5></a>
        </li>
        <li class="nav-item">
          
        </li>
        <li class="nav-item">
          <a class="nav-link mt-1 me-sm-4"  onClick={handleLogout} href="/"><h5>Logout</h5></a>
        </li>
        <form class="d-flex">
        <input class="form-control me-sm-2 mt-2 col-7" type="text" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-16" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </nav> 
  <br></br>
  <div class="card-deck col-9 mx-auto">
  <div class="card" >
    <img class="card-img-top" src={require('./Images/m.jpg')} style={{height:'200px',width:'289px'}} alt="Card image cap"></img>
    <div class="card-body">
    <center><button type="button" class="btn btn-outline-primary" onClick={Register2}>New Requests</button></center>
      {/* <h5 class="card-title" ><center>New Orders</center></h5> */}
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={require('./Images/p.png')} style={{height:'200px',width:'289px'}} alt="Card image cap"></img>
    <div class="card-body">
    <center><button type="button" class="btn btn-outline-primary" onClick={Register3}>Active Orders</button></center>
      {/* <h5 class="card-title"><center>Active Orders</center></h5> */}
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={require('./Images/o.jpg')} style={{height:'200px',width:'289px'}} alt="Card image cap"></img>
    <div class="card-body">
    <center><button type="button" class="btn btn-outline-primary" onClick={Admin_Order_Completed}>Completed Orders</button></center>
      {/* <h5 class="card-title"><center>Completed Orders</center></h5> */}
    </div>
  </div>
</div>
<br></br>
  <div class="card-deck col-6 mx-auto">
  {/* <div class="card">
  <img class="card-img-top" src={require('./Images/s.jpg')} style={{height:'200px',width:'289px'}} alt="Card image cap"></img>
    <div class="card-body">
    <center><button type="button" class="btn btn-outline-primary" >Add Transporters</button></center>
    
    </div>
  </div> */}
  <div class="card">
  <img class="card-img-top mx-auto" src={require('./Images/q.jpg')} style={{height:'200px',width:'284px'}} alt="Card image cap"></img>
    <div class="card-body">
    <center><button onClick={Register1} type="button" class="btn btn-outline-primary" >Transporters</button></center>
      {/* <h5 class="card-title"><center>Transporters</center></h5> */}
    </div>
  </div>
  <div class="card" >
  <img class="card-img-top mx-auto" src={require('./Images/r.jpg')} style={{height:'200px',width:'284px'}} alt="Card image cap"></img>
    <div class="card-body ">
    <center><button onClick={Register} type="button" class="btn btn-outline-primary" >Clients</button></center>
      {/* <h5 class="card-title" href="/Admin_Users" ><center>Clients</center></h5> */}
    </div>
  </div>
{/* </div>   */}
</div>
 
<div class="global">
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
