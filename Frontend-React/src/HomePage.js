import React from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import './HomePage.css';
import AuthServiceUsers from './service/AuthServiceUsers';
import UserService from './service/UserService';
import AuthServiceTransporters from './service/AuthServiceTransporters';
import TransporterService from './service/TransporterService';
import Marquee from "react-fast-marquee"; 

export default function HomePage(props) {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => { localStorage.clear() }, []);
    

   const login = (e) => {
        e.preventDefault();
        const credentials = {username: username, password: password};
        AuthServiceUsers.login(credentials).then(res => {
          console.log(res.data.username);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('token', res.data.token);
           props.history.push('/UserLogin');
        });

        
    };

    const Tlogin = (e) => {
      e.preventDefault();
      const credentials = {username: username, password: password};
      AuthServiceTransporters.Tlogin(credentials).then(res => {
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('token', res.data.token);
         props.history.push('/TransporterLogin');
          
      });
  };

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
	 
	const history = useHistory();
  
  const Register = () => {
      history.push("/RegistrationFormUsers")
    };



      const TrRegister = () => {
        history.push("/RegistrationFormTransporters")
      };

   

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
  <span class="col-12">
    {/* <div class="form-group col-3"> */}
    <span style={styles.block1} > <br></br>
    <p class="text-center"><label class="form-label mt-4 text-center"><h4>USERS</h4></label></p>
     <div class="form-floating mb-3 ">
      <input type="text" class="form-control"  onChange={(e)=> setUsername(e.target.value) } id="floatingInput" placeholder="User Name"></input>
      <label for="floatingInput">User Name</label>
     </div>
     <div class="form-floating">
      <input type="password" class="form-control"  onChange={(e)=> setPassword(e.target.value)} id="floatingPassword" placeholder="Password"></input>
      <label for="floatingPassword">Password</label>
     </div>
     <br></br>
     <form className="d-flex ">
      <button onClick={Register} class="btn btn-secondary my-2 my-sm-0" type="submit">Sign Up</button>
      &nbsp;&nbsp;
      <button class="btn btn-secondary my-2 my-sm-0" onClick={login} type="submit">Login</button>
    </form>
    </span> 
    {/* <div> */}
    <span style={styles.block3}>
     {/* <img src={require('./Images/b.jpg')} class="mx-auto d-block col-6"/> */}
     <img src={require('./Images/b.jpg')} class="mx-auto d-block col-12" alt="Responsive image"/>
    </span>
    
    {/* <div class="form-group col-3"> */}
    <span style={styles.block2}>
    <br></br>
    <p class="text-center"><label class="form-label mt-4" ><h4>TRANSPORTERS</h4></label></p>
     <div class="form-floating mb-3 " >
      <input type="email"  onChange={(e)=> setUsername(e.target.value) } class="form-control" id="floatingInput" placeholder="name@example.com"></input>
      <label for="floatingInput">Transporter Name</label>
     </div>
     <div class="form-floating" >
      <input type="password"  onChange={(e)=> setPassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password"></input>
      <label for="floatingPassword">Password</label>
     </div>
     <br></br>
     <form className="d-flex">
      <button onClick = {TrRegister} class="btn btn-secondary my-2 my-sm-0" type="submit">Sign Up</button>
      &nbsp;&nbsp;
      <button class="btn btn-secondary my-2 my-sm-0" onClick={Tlogin} type="submit">Login</button>
    </form>
    </span> <br></br>
  </span><br></br>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br>
<Marquee speed="60"><p class="p-2 mb-2 bg-danger text-white"><strong>We offer a discount of 20-25% on all our trips, compared to other platforms ! As we provide those vehicles to our customers which are returning back after completing their primary trip. </strong></p></Marquee>

<figure class="text-center mt-2">
  <blockquote class="blockquote">
    <p class="mb-0" ><h5>We deliver everything except <strong>excuses</strong>.</h5></p>
  
  </blockquote>
  <figcaption class="blockquote-footer">
    Transport Buddy team...
  </figcaption>
</figure>
<br></br>
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Vehicle Type</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">From Location</th>
      <th scope="col">To Location</th>
      <th scope="col">Fare</th>
      
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
        <td>{item.fare}</td>
        
      </tr>
      
    </tbody>

    );
    })

    }
    </table>
    
   <br></br> <center><p class="mt-5"><h4>Transport Buddy – India’s most reliable, dedicated and expert online Transport logistics services partner!</h4>

Transport Buddy is one of the foremost trucking companies, delivering the plethora of transport services to its esteemed consumers across India. We are the “best-in-class and cost-effective transporter” as defined by our customers and serving this industry for many years.

We have set high standards in every facet of transportation, and strive to keep raising the bar. With our extensive industry knowledge and skilled team, you can completely focus on your core interests whereas leaving the tiring and complex moving process on us.
Time-critical? No worries – Transport Buddy will help you!

Our company is equipped with advanced equipment, modern tools, and expertise that enable us to help our consumers with crucial transportation and supply chain solutions. We ensure businesses that they will get excellent-quality, prompt, and secure transportation services irrespective of time-constraint, the heavy load issue, and any other related problem.

Being the prime logistics services provider, we believe that people, technology, infrastructure and expertise all work together to help businesses to succeed and henceforth, we are offering the right blend of all these.

We are a customer-centric firm and our every action is aimed to offer ease and comfort to them when it comes to booking a truck. Our online truck booking app has tremendously simplified the process of booking a truck. Whether you are looking for the companies of online truck booking Hyderabad or online truck booking Mumbai, Transport Buddy would always be your right choice.
<br></br><br></br>

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src={require('./Images/j.jpg')} alt="Card image cap" style={{height:'259px',width:'180'}}></img>
    <div class="card-body">
      <h5 class="card-title">Rich industry experience</h5>
      <p class="card-text">We bring together years of diverse experience in the transport industry. As the best online transport booking company, we know what all it needs to bring you effective and affordable solutions to suit your every transport need.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={require('./Images/k.jpg')} alt="Card image cap" style={{height:'259px',width:'180'}}></img>
    <div class="card-body">
      <h5 class="card-title">Hassle-free services</h5>
      <p class="card-text">We provide hassle-free shipping and flawless logistics solutions for all your Transport needs, whether small or big, to all parts across the country.
Are you looking for a reliable and experienced transport company in India? Search online for “local transport near me” or “transport company near me”, we are sure that you will find Transport Buddy in top results. So, call us now to book our services!</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={require('./Images/l.jpg')} alt="Card image cap" style={{height:'259px',width:'180'}}></img>
    <div class="card-body">
      <h5 class="card-title">Competitive pricing</h5>
      <p class="card-text">By designing innovative transport solutions that are targeted to your unique business requirements, we have created a pricing strategy that works for everyone. Cost can become a major constraint while hiring our services, but with our most affordable prices, we won’t let this happen with our clients.</p>
    </div>
  </div>
</div>
<br></br>
<h4>Online Truck Booking- A Smart Trucking Move</h4>
Bored with traditional truck booking practices? Looking for a smart and quick way to book a truck? No worries! We have introduced an innovative and sophisticated way to book trucks. Our online truck booking app and online portal will allow you to book truck online anywhere, anytime.

Online transport booking is just a click away! No matter what type and size of your load is, we have the necessary infrastructure, equipment and tools to accommodate your transportation needs. We are a full-service transport company backed by a wide range of tech-enabled trucks, and experienced & skilled team players to offer you best-in-class logistics and supply chain solutions.

We offer you an instant pricing option while you try to book a truck using our mobile app. It will give you a better idea to manage your transportation budget.
<br></br>
<br></br>
<div class="card bg-primary text-white">
  <div class="card-body">
  <h4>Advanced technology</h4>
Our adoption of technology, proven expertise and a huge network of fleet owners and drivers helps us to serve you anywhere, anytime across any part of the country.
<br></br>
  </div>
</div>
<br></br>

<br></br>
<div class="card bg-secondary text-white">
  <div class="card-body">
  <h4>Reliability and safety</h4>
We drive reliability and safety in transport operations through the effective implementation of advanced security tools and technologies. It further helps you to drive efficiency and achieve operational excellence.
<br></br>
  </div>
</div>
<br></br>

<br></br>
<div class="card bg-primary text-white">
  <div class="card-body">
  <h4>On-time, every time</h4>
We understand the value of time for you as well as for us. That is why we try to deliver your consignment on time, every time.
<br></br>
  </div>
</div>
<br></br>

<br></br><h4>A trucking company – always there for you!</h4>
Our safe and affordable transport services will help businesses to drive business growth. We have years of experience in handling different types of transportation projects which enable us to help our businesses to focus on their core competencies and business operations. Our trucking company adds value to businesses at every stage, right from delivering advanced truck booking solutions to time-bound deliveries of goods anywhere across the nation.
<br></br>
We are your trusted partner in your digital transformation journey. We have designed our app while keeping your truck booking needs in mind. No matter whether transportation involves short distance or long-distance, we are committed to delivering your goods in a hassle-free, safe and timely manner. How we can help you?
<br></br>
<br></br>


</p></center>

<br></br>

<div class="card mb-5 col-9 mx-auto border border-primary" >
<img class="card-img-top" src={require('./Images/i.PNG')} alt="Card image cap"></img>
<div class="card-body">
  <center><h5 class="card-title">Hola!</h5></center>
    <p class="card-text">You can simply visit our website or can contact our customer support team to book your vehicle. Once the booking is confirmed, you will get the details of the vehicle and driver. Finally, you will get the receipt of the order once the shipment will be delivered.</p>
  </div>
</div>
<center><span class="badge rounded-pill bg-primary"><h5>Looking for a trustworthy and specialized transport company? Get in touch with us today!</h5></span></center>

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
                <li><a href="/RegistrationFormUsers">Users</a> </li>
                <li><a href="/RegistrationFormTransporters">Transporters</a> </li>
                <li><a href="/RegistrationFormAdmin">Admin</a> </li>
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
  );
}




const styles={
  block1:{
  float:"left",
  width:"20%"
  },
  block3:{
    float:"left",
    width:"57%",
    marginLeft:20
    },
  block2:{
  float:"right",
  width:"20%"
  }
  };