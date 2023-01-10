import React from 'react'
import './Contact.css'
import Marquee from "react-fast-marquee"; 



export default function Contact() {
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
  
    <div style={{backgroundColor:'white'}}><br></br><h1><center>Get In Touch</center></h1>
     <ul class="nav nav-tabs" role="tablist">
     <Marquee speed="70"><li class="nav-item" role="presentation">
  <a class="nav-link" style={{fontSize:'20px'}}  tabindex="-1"><strong>Registered Office</strong></a>
  </li></Marquee>
</ul><br></br>
<center><p><h6>
Green Park<br></br>
Sun Complex,<br></br>
Super City Twp, Bareilly, Uttar Pradesh 243006<br></br>
Helpline : 8999583807 / 9568347177<br></br>
Email : transportbuddy@gmail.com<br></br>
Office Hours: 09:00AM to 07:00PM<br></br>
(Sunday 09:00AM to 02:00PM)</h6>
</p></center>

<img src={require('./Images/e.PNG')}  alt="Map Desc" class="mx-auto d-block rounded zoom" style={{height:'250px',width:'500px'}}/><br></br><br></br>
<center><span class="badge rounded-pill bg-primary"><h5>You can call us or meet us at our office address or email us at the email address provided.</h5></span></center>
    
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

</div>  </>
  )
}
