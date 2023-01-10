package com.bezkoder.spring.hibernate.onetomany.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bezkoder.spring.hibernate.onetomany.model.Requests;

public interface RequestsRepository extends JpaRepository<Requests,Integer>{

}
