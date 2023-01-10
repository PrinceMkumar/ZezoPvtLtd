import React from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Admin_Users() 
{
  const[users, setUsers] = useState([]);
    useEffect(()=>
    {
      handleClick1();
    },[])

    async function handleClick1()
    {
      const result = await axios.get(
        "http://localhost:8080/api/users");
        setUsers(result.data);
        console.log(result.data);
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
  <table className="table table-hover">
    <thead>
    <tr>
      <th scope="col">Client Id</th>
      <th scope="col">Client Name</th>
      <th scope="col">Client Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Full Address</th>
    </tr>
    </thead>
    {users.map(function fun(props)
    {
      return(
        <tbody>
      <tr className="table-active">
        <th scope="row">{parseInt(props.userId)}</th>
        <td>{props.username}</td>
        <td>{props.useremail}</td>
        <td>{parseInt(props.phone)}</td>
        <td>{props.fulladdress}</td>
      </tr>
      
    </tbody>

    );
    })

    }
    </table>
  
    </div>
  )
}
