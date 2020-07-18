package com.example.demo.resources;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Details;
import com.example.demo.repository.DetailsRepository;



@RestController
public class DetailsController {
	@Autowired
	private DetailsRepository repository;
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addDetails")
	public String saveDetails( @RequestBody Details details) {
		
		if (details.getName()=="") {
			return "error";
		}else if(details.getClas()==""){
			return "error";
		}else if(details.getDiv()==""){
			return "error";
		}else if(details.getDob()==""){
			return "error";
		}else if(details.getGender()==""){
			return "error";
		}

		repository.save(details);
		return "Info Saved";
		
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/findDetails")
	public List<Details> getDetails(){
		return repository.findAll();	
	} 

}
