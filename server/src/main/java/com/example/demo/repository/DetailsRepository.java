package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Details;

public interface DetailsRepository extends MongoRepository<Details, Integer> {

}
