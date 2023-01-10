import React from 'react'
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Admin_Active() 
{
  // const[users1, setUsers1] = useState([]);
  const[users2, setUsers2] = useState([]);
    
  useEffect(()=>
    {
      // handleClick1();
      userIdfetch();
    },[])

    // async function handleClick1()
    // {
    //   const result1 = await axios.get(
    //     "http://localhost:8080/api/vehicles/allrequested");

        
    //     setUsers1(result1.data);
        
    //     // console.log(result.data);
    // }

    async function userIdfetch(){
      const result2 = await axios.get(
    
        "http://localhost:8080/api/users/activerequests");
        setUsers2(result2.data);

    }

    
  // const [requestid, setRequestid] = useState('');
 
//   const [status, setStatus] = useState('');

  async function changeStatus(e, vehicleid, requestid)
    {   
        
        // const userId =  setuserId(localStorage.getItem('userId'));
        // const User = {userId}
        const Vehicle = {vehicleid, requestid}
        
    try
        {
        
        //   await axios.put("http://localhost:8080/api/users/"+userId+"/activetrips", Vehicle 
        // );

        
          await axios.put("http://localhost:8080/api/vehiclesstatuscomplete/"+vehicleid, Vehicle 
         );
        
         await axios.put("http://localhost:8080/api/requestsstatuscompleted/"+requestid, Vehicle 
         );
        
        // await axios.put("http://localhost:8080/api/vehicle_l/"+JSON.stringify(vehicleid), { params: { "status" : "1"} }
        // );
          alert("Order has been placed Successfully");
          window.location.href="/AdminLogin"
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px'}}>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <img src={require('./Images/a.png')} alt="Navbar" className="rounded offset-1" style={{height:'70px',width:'200px'}}/>
      <ul className="navbar-nav offset-4">
        <li className="nav-item">
          <a className="nav-link mt-1" href="/"><h5>Home</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mt-1" href="/AdminLogin"><h5>Dashboard</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mt-1" href="#"><h5>Logout</h5></a>
        </li>
        <form class="d-flex">
        <input class="form-control me-sm-2 mt-2 col-7" type="text" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-16" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </nav> 
<br></br>

{/* {users2.map(function fun2(props2)
      {
        return(
          
          <><p>{props2.user.username}</p>
          <p>{props2.vehicle.vehicletype}</p>
          
          <p>{e => { userIdfetch(e, props2.userid); } }</p></>
          
          );
      })

    } */}

{/* {users2.map(function fun2(items){

     {items.requestid}
            
        }} */}

  <table className="table table-hover">
    <thead>
    <tr>
      {/* <th scope="col">Vehicle Id</th> */}
      <th scope="col">Client Name</th>
      <th scope="col">Vehicle Name</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">Primary Driver</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Location From</th>
      <th scope="col">Location To</th>
      <th scope="col">Fare</th>
      <th scope="col">Scheduled Date</th>
      {/* <th scope="col">Transporter Id</th> */}
    </tr>
    </thead>

    {users2.map(function fun(props)
    {
      return(
        
        <tbody>
      <tr className="table-active">
        <th scope="row">{props.user.username}</th>
        {/* <td>{props.user.username}</td> */}
        <td>{props.vehicle.vehicletype}</td>
        <td>{props.vehicle.vehiclenumber}</td>
        <td>{props.vehicle.driver1name}</td>
        <td>{props.vehicle.driver1phone}</td>
        <td>{props.vehicle.fromlocation}</td>
        <td>{props.vehicle.tolocation}</td>
        <td>{props.vehicle.fare}</td>
        <td>{props.vehicle.sceduleddate}</td>
        {/* <td>{props.vehicle.transporterid}</td> */}
        {/* <td>{props[0]}</td> */}
        <td>
        <button onClick={ e => {changeStatus (e, props.vehicle.vehicleid, props.requestid)} } type="button" class="btn btn-success">Complete</button></td>
      </tr>
      
    </tbody>

    );
    })

    }
    </table>
  
    </div>
  )
}
