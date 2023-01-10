import React from 'react'

export default function FAQ() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
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
    <div class="container-fluid " style={{backgroundColor:'white'}}><br></br>
      <center><h1>FAQ</h1></center>
      <br></br>

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How to register?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>On our website, you will find options for registration and login. If you are a registered member then you can directly log into our website, else you have to register first and then you can log-in with respective credentials.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>Why should I book a vehicle with Transport Buddy?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Transport Buddy is a platform where we provide those vehicles which are returing back to their initial location after completing their primary trips. Thus, you will get a discount of 20%(approx) as compared to other platforms.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How do I request a booking?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Our booking system is a simplified process. You can place a booking request online on our website for the availble locations or you can call our customer care number 8999583807. Our team after verification finds the nearest truck for you.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How would I know my fare charges and bill amount?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Once our system receives your booking, you will be notified of the approximate distance that your goods will travel, and accordingly your bill amount will be calculated after completing the journey.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How will I receive my invoice?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>You will receive an auto-generated invoice on your registered e-mail ID once the consignment has been delivered.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>Can I place a booking with multi-point pick-up and drop?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>You can definitely do so. However, extra costs for the extra point of delivery or pick-up will be levied accordingly. Our team will provide you with the additional cost incurred at the time of booking.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How can I cancel my booking? Will I be charged a cancellation fee?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Currently, you are required to raise a cancellation request through the customer care number available on our website. Cancellation will then be approved as per the terms and conditions. A cancellation fee would also be applicable if our Truck has reached client pickup location.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>Is there a possibility of the truck being a no-show once the booking has been confirmed?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>We are committed to fulfil our responsibility toward all confirmed bookings. In the event of not being able to do so due to unforeseen circumstances, you will be notified well ahead of the pick-up time.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>Can I change the vehicle type after it has reached the pick-up point?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Sorry, this option is currently not available with Transport Buddy, however you can contact our customer support team and we will try to find the best option for you.</a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>How many days or hours in advance do I need to make my booking?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>Currently we are accepting bookings at the least an hour prior to your desired pick-up time. </a><br></br>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'grey', fontSize:'20px'}}>What are the additional charges or waiting charges ?</a>
  <a href="#" class="list-group-item list-group-item-action active" style={{backgroundColor:'lavender', fontSize:'15px', color:'black'}}>If the truck has reached client location and there is delay in loading per day waiting charges range from 1000 to 5000 depending on vehicle type , if the vehicle is not loaded and returned empty customer is liable to pay driver fuel charges and waiting charges.</a><br></br>
</div>
<br></br>
<center><span class="badge rounded-pill bg-primary"><h5>For more queries you can always contact our customer support team.</h5></span></center>

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
</div>
  )
}
