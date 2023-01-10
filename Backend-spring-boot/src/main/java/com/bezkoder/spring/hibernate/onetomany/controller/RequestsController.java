package com.bezkoder.spring.hibernate.onetomany.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.hibernate.onetomany.exception.ResourceNotFoundException;
import com.bezkoder.spring.hibernate.onetomany.model.Requests;
import com.bezkoder.spring.hibernate.onetomany.model.Users;
import com.bezkoder.spring.hibernate.onetomany.model.Vehicles;
import com.bezkoder.spring.hibernate.onetomany.repository.RequestsRepository;
import com.bezkoder.spring.hibernate.onetomany.repository.UsersRepository;
import com.bezkoder.spring.hibernate.onetomany.repository.VehiclesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class RequestsController {
	
	@Autowired
	private RequestsRepository requestsrepository ;
	
	@Autowired
	private UsersRepository usersrepository;
	
	@Autowired
	private VehiclesRepository vehiclesrepository;

	
	@GetMapping("/requests")
	public List<Requests> findAll()
	{
		return requestsrepository.findAll();
	}
	
	@GetMapping("/users/{userid}/requests")
	  public ResponseEntity<List<Requests>> getAllRequestsByUsersId(@PathVariable(value = "userid") int userid) {    
		Users users = usersrepository.findById(userid)
	        .orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userid));

	    List<Requests> requests = new ArrayList<Requests>();
	    requests.addAll(users.getRequests());
	    
	    return new ResponseEntity<>(requests, HttpStatus.OK);
	  }
	
	@GetMapping("/vehicles/{vehicleid}/requests")
	  public ResponseEntity<List<Requests>> getAllRequestsByVehicleid(@PathVariable(value = "vehicleid") int vehicleid) {    
		Vehicles vehicles = vehiclesrepository.findById(vehicleid)
	        .orElseThrow(() -> new ResourceNotFoundException("Not found Vehicle with id = " + vehicleid));

	    List<Requests> requests = new ArrayList<Requests>();
	    requests.addAll(vehicles.getRequests());
	    
	    return new ResponseEntity<>(requests, HttpStatus.OK);
	  }

	  @GetMapping("/requests/{requestid}")
	  public ResponseEntity<Requests> getRequestsByUsersId(@PathVariable(value = "requestid") int requestid) {
		  Requests requests = requestsrepository.findById(requestid)
	        .orElseThrow(() -> new ResourceNotFoundException("Not found Request with Requestsid = " + requestid));

	    return new ResponseEntity<>(requests, HttpStatus.OK);
	  }

	  @PostMapping("/users/{userid}/requests")
	  public ResponseEntity<Requests> createRequests(@PathVariable(value = "userid") int userid,
	      @RequestBody Requests requestsRequest) {
		  Requests requests = usersrepository.findById(userid).map(users -> {
			  users.getRequests().add(requestsRequest);
	      return requestsrepository.save(requestsRequest);
	    }).orElseThrow(() -> new ResourceNotFoundException("Not found User with userid = " + userid));

	    return new ResponseEntity<>(requests, HttpStatus.CREATED);
	  }

	  @PutMapping("/requests/{requestid}")
	  public ResponseEntity<Requests> updateRequests(@PathVariable("requestid") int requestid, @RequestBody Requests requestsRequest) {
		  Requests requests = requestsrepository.findById(requestid)
	        .orElseThrow(() -> new ResourceNotFoundException("RequestId " + requestid + "not found"));

		  requests.setUserid(requestsRequest.getUserid());
		  requests.setVehicleid(requestsRequest.getVehicleid());
		  

	    return new ResponseEntity<>(requestsrepository.save(requests), HttpStatus.OK);
	  }

	  @DeleteMapping("/requests/{requestid}")
	  public ResponseEntity<HttpStatus> deleteRequests(@PathVariable("requestid") int requestid) {
		  requestsrepository.deleteById(requestid);

	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	  }
	  
	  @DeleteMapping("/users/{userid}/requests")
	  public ResponseEntity<List<Requests>> deleteAllRequestsOfUsers(@PathVariable(value = "userid") int userid) {
	    Users users = usersrepository.findById(userid)
	        .orElseThrow(() -> new ResourceNotFoundException("Not found User with userid = " + userid));
	    
	    users.removeRequests();
	    usersrepository.save(users);
	    
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	  }
	
    
    /*@GetMapping("/requests/{requestid}")
    public Requests getRequests(@PathVariable int requestid)
    {
    	Requests theRequests = requestsservice.findById(requestid);
    	if(theRequests == null)
    	{
    		throw new RuntimeException("Request Not found - "+requestid);
    	}
		return theRequests;
    }
    
    @PostMapping("/requests")
    public Requests addUsers(@RequestBody Requests theRequests)
    {
    	theRequests.setRequestId(0);
    	requestsservice.save(theRequests);
		return theRequests;
    }
    
    @PutMapping("/requests")
    public Requests updateRequests(@RequestBody Requests theRequests)
    {
    	requestsservice.save(theRequests);
		return theRequests;
    }
    
    @DeleteMapping("/requests/{requestid}")
    public String deleteRequests(@PathVariable int requestid)
    {
    	Requests tempRequests = requestsservice.findById(requestid);
    	
    	if(tempRequests == null)
    	{
    		//throw new RuntimeException("Employee id not found: "+employeeId);
    		return "Request Id not found: "+requestid ;
    	}
    	requestsservice.deleteById(requestid);
		return "Delete Request ID - "+requestid;
    }*/

}
