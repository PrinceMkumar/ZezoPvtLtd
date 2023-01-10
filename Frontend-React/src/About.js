import React from 'react'
import './Contact.css';

export default function About() {
  return (
    <div style={{backgroundColor:'info'}}>
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
  </nav> <br></br>
        <center><h1>About Us</h1></center><br></br>
        <div class="hovereffect">
    <img src={require('./Images/f.PNG')} alt="Full load Services " class="rounded mx-auto d-block responsive" style={{height:'200px',width:'300px'}}></img>
    <br></br></div>
    <p><center><h4>Advanced and affordable Transportation Services</h4></center>
 

 Transport Buddy is amongst the most renowned and appreciated cargo service providers in the industry. We started our journey with the aim of delivering the logistics and transportation excellence to our customers ensuring their comfort as well as success.
 
  
 
 At Transport Buddy, we render a broad spectrum of services incorporating Roadways Transportation Services, Logistics Services, Supply Chain Consulting, Warehouse Management, Inventory Control, Bulk Parcel Delivery etc. We provide innovative and dynamic transport solution with the right people, modern techniques, and advanced technologies to drive unmatched value for your business.
 
 Today, our company has firmly established itself as the 'Market Leader' in the logistics and supply chain industry in India. Drawing inspiration from our work and the standard we set, we have been proving ourselves every day in best quality, cost effectiveness, client satisfaction and assurance to deadlines.
 
  
 
 We are backed by a qualified, skilled, dedicated and professional workforce that offer end-to-end cargo handling solutions and cater to logistics needs of every consumer involved in the supply chain. All time-bound project cargo, urgent dispatches, fragile items, hazardous chemicals, vaccines, pharmaceutical products, electronic goods, automobile items, hardware, perishable shipments and many more are the part of our day-to-day routine and handled with enthusiasm and professionalism.
 <br></br> <br></br><div class="hovereffect">
 <img src={require('./Images/g.PNG')}  alt="Quick and Easy Portal " class="rounded mx-auto d-block responsive" style={{height:'200px',width:'300px'}}></img><br></br>  
 </div>
 Transport Buddy offers cutting-edge and state-of-the-art transport solutions to its customers, helping them to focus on their core competencies and business operations. Our company adds value to businesses at every level, right from delivering first-rate warehousing assistance to ensuring time-bound deliveries of goods anywhere across the country.
 
  
 
 To increase your business with a single click we have launched an advanced, inventive and feature-rich mobile app. With this user-friendly interface, Transport Buddy is offering you ease, flexibility, and efficiency to book a truck which will also contribute to driving your business growth. We have hundreds of wheels on the road. You can find one in just a click and can enjoy our quick and safe transport services.
 
  
 
 Our web portal has entirely transformed the way you book or hire the truck. This portal has made it easy and simple to avail our transport services within a minute. With this amazing online truck booking platform, we cover the whole process from truck booking to payments and documentation.
 <br></br>
 <br></br>
 <center>
 <div class="card-deck ">
  <div class="card ml-5 bg-primary">
    {/* <img class="card-img-top" src=".../100px200/" alt="Card image cap"> */}
    <div class="card-body" style={{color:'white'}}>
      <h4 class="card-title">Our commitment</h4>
      <p class="card-text">We are a dedicated group of professionals, committed to delivering value for you.  You will get what we have promised you. We don’t make false promises and don’t hide anything from you. When we make the commitment, you will get the delivery- no excuses.</p>
      
    </div>
  </div>
  <div class="card bg-secondary">
    {/* <img class="card-img-top" src=".../100px200/" alt="Card image cap"> */}
    <div class="card-body" style={{color:'black'}}>
      <h4 class="card-title">Our Vision</h4>
      <p class="card-text">To stay ahead among our rivals in the transport and logistics industry by providing world-class and innovative moving solutions to our clients. We wish to become the top choice of our customers when they are looking for a reliable, affordable and professional transporter.</p>
     
    </div>
  </div>
  <div class="card me-5 bg-primary">
    {/* <img class="card-img-top" src=".../100px200/" alt="Card image cap"> */}
    <div class="card-body" style={{color:'white'}}>
      <h4 class="card-title">Our Mission</h4>
      <p class="card-text">Stay responsive to consumers’ requirement, find innovative and flexible solutions and strive to achieve customer satisfaction with our performance, honesty, and integrity. We aim to achieve our esteemed patrons’ trust and develop a lasting relationship with them.</p>
    
    </div>
  </div>
</div></center></p>

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
