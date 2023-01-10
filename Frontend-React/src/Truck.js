import React from 'react'


export default function Truck() {
  return (
    <div>
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
        <img class="img-responsive" src={require('./Images/d.PNG')} alt = "Types"/>
        <br></br><br></br>
         
         <table class="table table-hover">
  <thead>		
    <tr>
      <th scope="col"><h3>TRUCK TYPE</h3></th>
      <th scope="col"><h3>SIZE (FT)</h3></th>
      <th scope="col"><h3>HOUSE HOLD CAPACITY</h3></th>
      <th scope="col"><h3>MAX WEIGHT</h3></th>
    </tr>
  </thead>
		
  <tbody>
    <tr class="table-active">
      <th scope="row">TATA ACE</th>
      <td>7 L x 4.8 W x 4.8 H</td>
      <td>1 BHK</td>
      <td>Max Load 850 Kgs</td>
    </tr>
    <tr>
      <th scope="row">ASHOK LEYLAND DOST</th>
      <td>7 L x 4.8 W x 4.8 H</td>
      <td>1 BHK</td>
      <td>Max Load 1 Ton</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">MAHINDRA BOLERO PICK UP</th>
      <td>8 L x 4.8 W x 4.8 H</td>
      <td>1 BHK</td>
      <td>Max Load 1.5 Ton</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">TATA 407</th>
      <td>9 L x 5.5 W x 5 H</td>
      <td>1.5 BHK</td>
      <td>Max Load 2.5 Ton</td>
    </tr>
    <tr class="table-success">
      <th scope="row">EICHER 14 FEET</th>
      <td>14 L x 6 W x 6.5 H</td>
      <td>2 BHK</td>
      <td>Max Load 4 Ton</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">EICHER 17 FEET</th>
      <td>17 L x 6 W x 7 H</td>
      <td>2.5 BHK</td>
      <td>Max Load 5 Ton</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">EICHER 19 FEET</th>
      <td>19 L x 7 W x 7 H</td>
      <td>2.5 BHK</td>
      <td>Max Load 7/8/9 Ton</td>
    </tr>
    <tr class="table-info">
      <th scope="row">TATA 22 FEET</th>
      <td>22 L x 7.5 W x 7 H</td>
      <td>3 BHK</td>
      <td>Max Load 10 Ton</td>
    </tr>
  </tbody>
</table><br></br>

<p><h4><center>Truck Types</center></h4>
<center>Transport Buddy is the leading transporter in India, uses different types of trucks to suit different kinds of loads. We choose these trucks to do a specific type of job. Depending on their shapes and sizes, these trucks make the transportation of goods and freight easy. With the online truck booking facility available today, customers want to choose the truck of their choice depending on their needs such as type of freight and load.</center><br></br>

 

<br></br><h4><center>Importance of choosing the right type of truck</center></h4>

<center>Cost is a major concern while hiring a logistics company. People avoid using transport services because of their high price, but there is good news. Choosing the right type of truck to ship your goods is can help to decrease the per-unit cost of transportation. TruckGuru allows you to choose the right type of truck to reduce your overall moving cost.</center>

<br></br>

<br></br><h4><center>Closed Body Truck Or Container Truck</center></h4>

<center>This truck category consists of three types of container trucks or closed body trucks with varied lengths. This type of trucks is used to transport heavy loads.</center>
<br></br>

<table class="table table-hover table-secondary">
<tbody>
    <tr>
      <th scope="col">1</th> 
      <td>32 FEET</td>
      <td>SINGLE AXEL TRUCK </td>
      <td>(7.5 TON CAPACITY)</td>
    </tr>  
    <tr>
      <th scope="row">2</th> 
      <td>32 FEET</td>  
      <td>MULTI AXEL TRUCK</td>
      <td>(16 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">3</th>   
      <td>24 FEET</td>
      <td>SINGLE AXEL TRUCK</td>
      <td>(7.5 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">4</th>   
      <td>24 FEET</td>
      <td>MULTI AXEL TRUCK</td>
      <td>(16 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">5</th>  
      <td>20 FEET</td>
      <td>SINGLE AXEL TRUCK</td>
      <td>(7.5 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">6</th>  
      <td>20 FEET</td>
      <td>MULTI AXEL TRUCK</td>
      <td>(16 TON CAPACITY)</td>
    </tr>
  </tbody>
</table>

<br></br><h4><center>Heavy Open Body Trucks</center></h4>

<center>This segment of a truck involves three types of trucks with different sizes which are suitable for the transportation of chemicals, food grains, raw materials and other heavy goods.</center>
<br></br>
<table class="table table-hover table-secondary">
<tbody>
    <tr>
      <th scope="col">1</th>   
      <td>32-40 FEET</td>
      <td>14 WHEELER TRUCK</td>
      <td>(21 TON TO 31 TON CAPACITY)</td>
    </tr>  
    <tr>
      <th scope="row">2</th>   
      <td>20-32 FEET</td>  
      <td>10 WHEELER TRUCK</td>
      <td>(10 TON TO 25 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">3</th>     
      <td>24-32 FEET</td>
      <td>12 WHEELER TRUCK</td>
      <td>(16 TON TO 25 TON CAPACITY)</td>
    </tr>
  </tbody>
</table>

<br></br><h4><center>Light Open Body Truck</center></h4>

<center>This category has three types of trucks with different capacities and is used for bulky boxes containing light items. We use-</center>
<br></br>
<table class="table table-hover table-secondary">
<tbody>
    <tr>
      <th scope="col">1</th>   
      <td>14 FEET</td>
      <td>EICHER</td>
      <td>(CAPACITY OF 3.5 - 4 TON CAPACITY)</td>
    </tr>  
    <tr>
      <th scope="row">2</th>   
      <td>17 FEET</td>  
      <td>EICHER</td>
      <td>(CAPACITY OF 4.5 - 5 TON CAPACITY)</td>
    </tr>
    <tr>
      <th scope="row">3</th>     
      <td>19 FEET</td>
      <td>EICHER</td>
      <td>(CAPACITY OF 5.5 - 10 TON CAPACITY)</td>
    </tr>
  </tbody>
</table><br></br>
  
<center>We, at Transport Buddy, are trying to resolve the problems that businesses and people experience in transporting their goods due to the lack of professional transporter in India. We help to minimize the cost of transportation by offering you a wide range of trucks. We enable you to move to any part of the country without any transportation problem.</center></p>
    
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
